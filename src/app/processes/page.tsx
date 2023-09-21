"use client";
import { SubprocessCascade } from "@/components/SubprocessCascade";
import { GetProcess } from "@/protocols";
import { getProcesses } from "@/services/get-processes";
import { useEffect, useState } from "react";

export default function Processes() {
  const [processes, setProcesses] = useState<GetProcess[]>([]);

  useEffect(() => {
    getProcesses()
      .then((processes) => {
        setProcesses(processes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex flex-col justify-center p-6 bg-base-200">
      {processes.length > 0 &&
        processes.map((process) => (
          <div key={process.id} className="collapse bg-accent mt-5 ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">
              {process.name}
            </div>
            <div className="collapse-content bg-accent pr-2 ">
              <div> name: {process.name}</div>
              <div> id: {process.id}</div>
              {process.description && (
                <div> description: {process.description}</div>
              )}
              {process.subProcess.length > 0 && <div>subprocessos:</div>}
              {process.subProcess.map((subprocess) => (
                <SubprocessCascade key={subprocess.id} {...subprocess} />
              ))}
            </div>
          </div>
        ))}
    </main>
  );
}
