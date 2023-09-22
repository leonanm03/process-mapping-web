import { UpdateProcess } from "@/protocols";
import { api } from ".";

export async function updateProcess(id: string, body: UpdateProcess) {
  const response = await api.patch(`/processes/${id}`, body);
  return response.data;
}
