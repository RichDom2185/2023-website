import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

const helloEndpoint = `${BACKEND_URL}/`;
export const sendHello = async (): Promise<string> => {
  const resp = await axios.get(helloEndpoint, {
    headers: { Accept: "text/plain" },
  });
  return resp.data;
};
