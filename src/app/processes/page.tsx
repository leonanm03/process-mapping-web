"use client";
import { SubprocessCascade } from "@/components/SubprocessCascade";
import { GetProcess } from "@/protocols";
import { api } from "@/services";
import { useEffect, useState } from "react";

export default function Processes() {
  const [processes, setProcesses] = useState<GetProcess[]>([]);

  useEffect(() => {
    const data = api.get<GetProcess[]>("/processes");
    data
      .then((response) => {
        setProcesses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
      <ul className="list-disc pl-5">
        {processes.map((process) => (
          <li key={process.id}>
            {process.name}
            {process.subProcess.map((subprocess) => (
              <SubprocessCascade key={subprocess.id} {...subprocess} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
