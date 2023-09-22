import { api } from ".";

export async function deleteProcess(id: string) {
  await api.delete(`/processes/${id}`);
  return;
}
