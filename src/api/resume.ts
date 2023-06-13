import axios from "axios";
import { GetResumeRequestParams } from "../types/resume";
import { BACKEND_URL } from "../utils/constants";

const getResumeEndpoint = `${BACKEND_URL}/resume`;
export const getResume = async (token: string): Promise<Blob> => {
  const body: GetResumeRequestParams = { token };
  const resp = await axios.post(getResumeEndpoint, body, {
    responseType: "arraybuffer",
    headers: { Accept: "application/pdf" },
  });
  const pdf = new Blob([resp.data], { type: "application/pdf" });
  return pdf;
};
