import {Router} from "express"
const  authRouter = Router();
import {registerController,verifyEmailController,loginController,getmeController} from "../controller/auth.controller.js"
import { registerValidationRules , loginValidator} from "../validator/registerValidator.js"
import {authMiddleware } from "../middleware/auth.middleware.js";

authRouter.post('/register',registerValidationRules(), registerController)
authRouter.get('/verifyEmail', verifyEmailController)
authRouter.post('/login',loginValidator,loginController)
authRouter.get('/getme', authMiddleware, getmeController)
export default authRouter;