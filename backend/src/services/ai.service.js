import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "@langchain/core/messages";
import { SystemMessage } from "@langchain/core/messages";
import { AIMessage } from "@langchain/core/messages";

const mistral_model = new ChatMistralAI({
  model: "mistral-large-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

// const gemini_model = new ChatGoogleGenerativeAI({
//   model: "gemini-2.5-flash-lite",
//   apiKey: process.env.GOOGLE_GEMINI_API_KEY,
// });

export async function generateResponse(prompts) {
    const response = await mistral_model.invoke(prompts.map(prompt => {
        if (prompt.role == "user") {
            return new HumanMessage(prompt.content)
        } else if (prompt.role == "ai") {
            return new AIMessage(prompt.content)
        }
    }));
  return response.text;
  
}

export async function genrateTitle(prompt) {
  const response = await mistral_model.invoke([
    new SystemMessage(`
           User will provide you with the first message of a chat conversation, and you will generate a title that captures the essence of the conversation in 2-4 words. The title should be clear, relevant, and engaging, giving users a quick understanding of the chat's topic.`),
    new HumanMessage(`
              Generate a title for a chat conversation based on the following first message:
            "${prompt}"
            `),
  ]);

  console.log(response.text);
  return response.text;
}
