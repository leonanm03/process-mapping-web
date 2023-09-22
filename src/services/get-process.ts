import { Process } from "@/protocols";
import { api } from ".";

export async function GetProcess(id: string): Promise<Process> {
  const response = await api.get(`/processes/${id}`);
  return response.data;
}
