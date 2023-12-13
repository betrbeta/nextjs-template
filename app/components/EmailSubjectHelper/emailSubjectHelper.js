// emailSubjectHelper.js
import OpenAI from "openai";

// Set your OpenAI GPT-3 API key
const apiKey = process.env.NEXT_PUBLIC_OPENAI_APIKEY;

const openaiInstance = new OpenAI({
  key: "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",
});

export async function generateEmailSubject(prompt) {
  // Define your prompt for generating email subjects
  const fullPrompt = `Create a compelling email subject for the following content:\n${prompt}\nSubject:`;

  try {
    // Call the OpenAI GPT-3 API to generate the subject
    const response = await openaiInstance.complete({
      engine: "text-davinci-003", // You can experiment with other engines
      prompt: fullPrompt,
      max_tokens: 50, // Adjust as needed
      temperature: 0.7, // Adjust as needed (higher values for more randomness)
      stop: null, // You can add specific stop words to control the length of the subject
    });

    // Extract the generated subject from the API response
    const generatedSubject = response.choices[0].text.trim();

    return generatedSubject;
  } catch (error) {
    console.error("Error generating email subject:", error);
    throw error;
  }
}
