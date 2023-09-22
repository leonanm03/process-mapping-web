"use client";
import { ProcessData } from "@/components";
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
          <div key={process.id} className="collapse bg-accent mt-5 p-1">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">
              {process.name}
            </div>
            <div className="collapse-content bg-base-100 pr-2 ">
              <ProcessData {...process} />
              {process.subProcess.length > 0 && (
                <div className="mt-3 text-l font-medium">subprocessos:</div>
              )}
              {process.subProcess.map((subprocess) => (
                <SubprocessCascade key={subprocess.id} {...subprocess} />
              ))}
            </div>
          </div>
        ))}
    </main>
  );
}
