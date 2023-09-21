import { Area } from "@/protocols";
import { api } from ".";

export async function getAreas(): Promise<Area[]> {
  const { data } = await api.get("/areas");
  return data;
}
