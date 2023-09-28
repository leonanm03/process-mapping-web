"use client";
import { GetProcess } from "@/protocols";
import { getProcesses } from "@/services";
import { createContext, useState } from "react";

export const ProcessesContext = createContext(
  {} as {
    processes: GetProcess[];
    setProcesses: React.Dispatch<React.SetStateAction<GetProcess[]>>;
    fetchProcesses: () => void;
  }
);

export const ProcessesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [processes, setProcesses] = useState<GetProcess[]>([]);

  const fetchProcesses = () => {
    getProcesses().then((processes) => {
      setProcesses(processes);
    });
  };

  return (
    <ProcessesContext.Provider
      value={{
        processes,
        setProcesses,
        fetchProcesses,
      }}
    >
      {children}
    </ProcessesContext.Provider>
  );
};
