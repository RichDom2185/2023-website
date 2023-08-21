import axios from "axios";
import { PostMessageRequestParams } from "../types/contact";
import { BACKEND_URL } from "../utils/constants";

const postMessageEndpoint = `${BACKEND_URL}/message`;
export const postMessage = async (
  email: string | undefined,
  telegram: string | undefined,
  message: string
): Promise<string> => {
  const body: PostMessageRequestParams = { email, telegram, message };
  const resp = await axios.post(postMessageEndpoint, body, {
    headers: { Accept: "text/plain" },
  });
  return resp.data;
};
