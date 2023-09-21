import { GetProcess } from "@/protocols";
import { api } from ".";

export async function getProcesses(): Promise<GetProcess[]> {
  const response = await api.get("/processes");
  return response.data;
}
