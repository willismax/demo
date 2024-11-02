const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function handleTextInput(text) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
    max_tokens: 150,
  });
  return response.data.choices[0].text.trim();
}

async function handleVoiceInput(voiceData) {
  const response = await openai.createTranscription({
    model: "whisper-1",
    file: voiceData,
  });
  return response.data.text.trim();
}

async function handleImageInput(imageData) {
  const response = await openai.createImage({
    model: "dall-e",
    prompt: imageData,
  });
  return response.data.data[0].url;
}

async function handleAIConversation(messages) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
  });
  return response.data.choices[0].message.content.trim();
}

module.exports = {
  handleTextInput,
  handleVoiceInput,
  handleImageInput,
  handleAIConversation,
};
