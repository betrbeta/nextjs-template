import axios, { AxiosRequestConfig } from "axios";

export default async function tts(text: string) {
  let audiodata = null;

  const key = process.env.NEXT_PUBLIC_VOICE_RSS_KEY;
  const options: AxiosRequestConfig = {
    url: `https://api.voicerss.org/?key=${key}&hl=en-us&b64=true&r=-5&src=please, type the numbers or letters you hear: ${text}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      accept: "*/*",
    },
  };

  try {
    const response = await axios(options);
    audiodata = response.data;
  } catch (error) {
    console.error(error);
  }
  return audiodata;
}
