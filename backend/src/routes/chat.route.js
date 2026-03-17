import { Router } from "express";
import { sendMessage,getChat,getMessages,deleteChat } from "../controller/chat.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js"

export const chatRouter = Router();


chatRouter.post("/chat",authMiddleware,sendMessage);
chatRouter.get("/chat",authMiddleware,getChat);
chatRouter.get("/getmessages/:messageid",authMiddleware,getMessages);
chatRouter.delete("/deletechat/:chatid",authMiddleware,deleteChat);

