export type Process = {
  id: string;
  name: string;
  areaId: number;
  description: string;
  fatherProcessId: string | null;
  createdAt: string;
  updatedAt: string;
};
