import userModel from "../model/userModel.js";
import {sendEmail} from '../services/mail.service.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export async function registerController(req,res,next){
   
    const {username,email,password} = req.body;

    const isuserExist = await userModel.findOne({email})

    if(isuserExist){
        return res.status(400).json({
            message:"user already exist"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    const emailverificationToken = jwt.sign({
        username:user.username,
        email:user.email,
    },process.env.JWT_SECRET);

    await sendEmail({
        to:email,
        subject:"Welcome to our app",
        html:`<h1>Welcome ${username} to our app</h1>
        <p>Thank you for registering with us. We're excited to have you on board! If you have any questions or need assistance, feel free to reach out to our support team.</p>
        <p>click <a href="http://localhost:3000/user/verifyEmail?token=${emailverificationToken}">here</a> to verify your account.</p>
        <p>Best regards,<br/>The Team</p>`,
      
    })


   res.status(201).json({
    message:"user registered successfully",
    user
  })
}


export async function verifyEmailController(req,res,next){
     const {token} = req.query;
      
     if(!token){
        return res.status(400).json({
            message:"invalid token"
        })
     }

     const decoded = jwt.verify(token,process.env.JWT_SECRET);

     const user = await userModel.findOne({email:decoded.email});

     user.verified = true;

     await user.save();

     const html = `<h1>Email verified successfully</h1>
     <p>Your email has been successfully verified. You can now log in to your account and start using our services.</p>
     <p>Best regards,<br/>The Team</p>`


   return res.send(html);
      
}

export async function loginController(req,res){
     const {email,password} = req.body;

     const user = await userModel.findOne({email:email});

     if(!user){
        return res.status(400).json({
            message:"invalid email or password"
        })
     }
      
     const isPasswordMatch = await user.comparePassword(password);

     if(!isPasswordMatch){
        return res.status(400).json({
            message:"invalid email or password"
        })
     }

        if(!user.verified){
            return res.status(400).json({
                message:"please verify your email before login"
            })
        }
      
        const token = jwt.sign({userid:user._id,username:user.username,email:user.email},process.env.JWT_SECRET)

        res.cookie('token',token)
        return res.json({
            message:"login successful",
            token,
            user:{
                userid:user._id,
                username:user.username,
                email:user.email

            }
        })

}

export async function getmeController(req,res){
       
    const user = req.user;
    
    return res.json({
        user
    })

}