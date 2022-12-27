import { Configuration } from "openai";

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });

export default configuration;