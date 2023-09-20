import { CreateProcess } from "@/protocols";
import { api } from "./api";

export async function createProcess(body: CreateProcess) {
  return await api.post("/processes", body);
}
