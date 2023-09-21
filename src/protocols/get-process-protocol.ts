export type GetProcess = {
  id: string;
  name: string;
  areaId: number;
  description: string;
  fatherProcessId: string | null;
  createdAt: string;
  updatedAt: string;
  area: {
    name: string;
  };
  subProcess: GetProcess[];
};
