import axios from "axios";
import { GetResumeRequestParams } from "../types/resume";
import { BACKEND_URL } from "../utils/constants";

const getResumeEndpoint = `${BACKEND_URL}/resume`;
export const getResume = async (token: string): Promise<Blob> => {
  const params: GetResumeRequestParams = { token };
  const resp = await axios.get(getResumeEndpoint, {
    responseType: "arraybuffer",
    headers: { Accept: "application/pdf" },
    params,
  });
  const pdf = new Blob([resp.data], { type: "application/pdf" });
  return pdf;
};
