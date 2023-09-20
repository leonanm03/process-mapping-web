import { CreateProcess } from "@/protocols";
import { api } from "./api";

export async function createProcess(body: CreateProcess) {
  console.log(api.defaults.headers);
  return await api.post("/processes", body);
}
