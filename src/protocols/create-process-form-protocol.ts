import { CreateProcess } from ".";

export type CreateProcessForm = {
  body: CreateProcess;
  setBody: React.Dispatch<React.SetStateAction<CreateProcess>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
};
