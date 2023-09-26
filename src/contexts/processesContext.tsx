"use client";
import { GetProcess } from "@/protocols";
import { getProcesses } from "@/services";
import { createContext, useState } from "react";
import { useEffect } from "react";

export const ProcessesContext = createContext(
  {} as {
    processes: GetProcess[];
    setProcesses: React.Dispatch<React.SetStateAction<GetProcess[]>>;
    refreshProcesses: () => void;
  }
);

export const ProcessesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [processes, setProcesses] = useState<GetProcess[]>([]);

  // useEffect(() => {
  //   getProcesses().then((processes) => {
  //     setProcesses(processes);
  //   });
  // }, []);

  const refreshProcesses = () => {
    getProcesses().then((processes) => {
      setProcesses(processes);
    });
  };

  return (
    <ProcessesContext.Provider
      value={{
        processes,
        setProcesses,
        refreshProcesses,
      }}
    >
      {children}
    </ProcessesContext.Provider>
  );
};
