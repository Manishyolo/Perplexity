import { chatModel } from "../model/chatModel.js";
import { messageModel } from "../model/messageModel.js";
import { genrateTitle, generateResponse } from "../services/ai.service.js";

export async function sendMessage(req, res) {
  const { userid, username, email } = req.user;

  const { message, chatId } = req.body;

  let chatTitle = null,
    chat = null;

  if (!chatId) {
    chatTitle = await genrateTitle(message);
    chat = await chatModel.create({
      user: userid,
      title: chatTitle,
    });
  }

  const currentChatid =  chatId || chat?._id ;

  const user_Message = await messageModel.create({
    chat: currentChatid,
    content: message,
    role: "user",
  });

  const Allmessages = await messageModel.find({ chat:currentChatid}).lean();

 
  const Ai_response = await generateResponse(Allmessages);

  const Ai_message = await messageModel.create({
    chat: currentChatid,
    content: Ai_response,
    role: "ai",
  });

  res.status(200).json({
    user_Message,
    Ai_message,
  });
}

export async function getChat(req,res){
          const { userid, username, email } = req.user;


          const chat = await chatModel.find({user:userid});


          if(!chat){

            return res.status(404).json({
                message:"chat not found"
            })
          }


          res.status(200).json({
            message:"chat found succesfully",
            chat:chat
          })
}
export async function getMessages(req,res){
    const { userid, username, email } = req.user;
    const {chatId} = req.params;
    
    
     const chat = await chatModel.find({
         _id:chatId,
        user:userid});


          if(!chat){

            return res.status(404).json({
                message:"chat not found"
            })
          }

          const messages = await messageModel.find({chat:chatId})

            res.status(200).json({
        message: "Messages retrieved successfully",
        messages
    })
}

export async function deleteChat(req, res) {

    const { chatId } = req.params;

    const chat = await chatModel.findOneAndDelete({
        _id: chatId,
        user: req.user.id
    })

    await messageModel.deleteMany({
        chat: chatId
    })

    if (!chat) {
        return res.status(404).json({
            message: "Chat not found"
        })
    }

    res.status(200).json({
        message: "Chat deleted successfully"
    })
}