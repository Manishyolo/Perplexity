import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GOOGLE_GEMINI_API_KEY
});


export async function generateResponse(prompt) {
     model.invoke(prompt).then((response) => {
        console.log(response.text);
        return response.text;
      }).catch((error) => {
        console.error("Error generating response:", error);
        return "Sorry, I couldn't generate a response at this time.";
      })
}