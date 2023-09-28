"use client";
import { ProcessData } from "@/components";
import { SubprocessCascade } from "@/components/SubprocessCascade";
import { ProcessesContext } from "@/contexts/processesContext";
import { Container } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

export default function Processes() {
  const { processes, fetchProcesses } = useContext(ProcessesContext);

  useEffect(() => {
    fetchProcesses();
  }, []);

  return (
    <Container as="main" minW="full" bg="purple.50">
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
    </Container>
  );
}
