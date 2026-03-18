import React from "react";
import { useSelector } from "react-redux";
import { useChat } from "../hook/useChat.js";
import { useEffect } from "react";
import { RiPerplexityFill, RiSendPlane2Fill } from "@remixicon/react";

const Dashboard = () => {
  const chats = [
    {
      id: 1,
      role: "user",
      content: "Hey AI, how are you?",
      createdAt: "2026-03-18T10:00:00Z",
    },
    {
      id: 2,
      role: "ai",
      content: "I'm doing great! How can I help you today?",
      createdAt: "2026-03-18T10:00:02Z",
    },
    {
      id: 3,
      role: "user",
      content: "Can you explain flexbox in simple terms?",
      createdAt: "2026-03-18T10:00:10Z",
    },
    {
      id: 4,
      role: "ai",
      content:
        "Sure! Flexbox is a layout system in CSS that helps you align and distribute space between items easily.",
      createdAt: "2026-03-18T10:00:12Z",
    },
    {
      id: 5,
      role: "user",
      content: "How do I center a div using flexbox?",
      createdAt: "2026-03-18T10:00:20Z",
    },
    {
      id: 6,
      role: "ai",
      content:
        "You can use display: flex, then justify-content: center and align-items: center on the parent container.",
      createdAt: "2026-03-18T10:00:22Z",
    },
    {
      id: 7,
      role: "user",
      content: "Nice! What about making a chat UI?",
      createdAt: "2026-03-18T10:00:30Z",
    },
    {
      id: 8,
      role: "ai",
      content:
        "For a chat UI, use a flex column layout, make the message area scrollable, and fix the input at the bottom.",
      createdAt: "2026-03-18T10:00:32Z",
    },
    {
      id: 9,
      role: "user",
      content: "Can I auto-scroll to the latest message?",
      createdAt: "2026-03-18T10:00:40Z",
    },
    {
      id: 10,
      role: "ai",
      content:
        "Yes! Use a ref and scrollIntoView() whenever a new message is added.",
      createdAt: "2026-03-18T10:00:42Z",
    },
  ];

  const chat = useChat();

  const user = useSelector((s) => s.auth.user);

  console.log(user);

  useEffect(() => {
    chat.initializeSocketConnection();
  }, []);

  return (
    <div className="w-full h-screen bg-black relative flex">
      <div className="sidebar w-[20vw]! border-r-[0.1px] border-[#ffffff1f] h-screen">
        <div className="headline w-full h-fit border-b-[0.1px] border-[#ffffff1f]">
          <h1 className="text-white px-[1vw] py-[1vw] font-[450] text-[1.1rem] flex gap-[.75vw] items-center justify-start">
            <RiPerplexityFill size={35} color="#F27127" /> Perplexity
          </h1>
        </div>
        <div className="chat-section w-full h-fit p-[.75rem] flex flex-col items-start gap-[.3rem] ">
          <h1 className=" px-[.5rem] py-[.3rem] text-[#7c7979a2] text-[.9rem] ">
            Your chats
          </h1>
          <div className="chat w-full h-fit cursor-pointer hover:bg-[#F27127] px-[.5rem] py-[.3rem] rounded-[.5rem]">
            <h2 className="text-white font-[400] text-[.95rem]">
              What is Gpu ?
            </h2>
          </div>
          <div className="chat w-full h-fit  cursor-pointer hover:bg-[#F27127] px-[.5rem] py-[.3rem] rounded-[.5rem]">
            <h2 className="text-white font-[400] text-[.95rem]">
              What is Gpu ?
            </h2>
          </div>
        </div>
      </div>
      <div className="chat-container w-[80vw] h-screen flex flex-col  items-center relative">
        <div className="message-area custom-scroll p-[4vw] gap-[1vw] w-full h-[85vh] overflow-auto flex flex-col ">
          {chats.map((chat) => {
            return (
              <div className="message w-full flex shrink-0  p-[.5vw]">
                {chat.role === "user" ? (
                  <div className="user-message p-[.75vw] text-white max-w-[40vw] ml-auto bg-[#A63F03] rounded-l-[1vw] rounded-br-[1vw] break-words">
                    <p>
                     {chat.content}
                    </p>
                  </div>
                ) : (
                  <div className="ai-message border-[0.1px] border-[#ffffff1f] p-[.75vw] text-white max-w-[40vw] mr-auto bg-[#18181B] rounded-r-[1vw] rounded-bl-[1vw] break-words">
                    <p>
                      {chat.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="input-container w-full flex items-center justify-center h-[15vh] bg-transparent">
          <form className="input-area  w-[60vw]  bottom-[2vw]   h-[10vh] flex items-center gap-[1vw]">
            <input
              placeholder="Ask anything here"
              className="text w-[90%] outline-none p-[.75rem] text-white rounded-[1vw] bg-[#9e999931]"
            />
            <button
              type="submit "
              className="p-[.75rem] bg-[#F27127] cursor-pointer rounded-[1vw]"
            >
              <RiSendPlane2Fill color="#00010D" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
