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
    // <div className="row">
    //   <ul className="list-disc pl-5">
    //     {processes.map((process) => (
    //       <li key={process.id}>
    //         {process.name}
    //         {process.subProcess.map((subprocess) => (
    //           <SubprocessCascade key={subprocess.id} {...subprocess} />
    //         ))}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <main className="flex justify-center p-6">
      <div className="collapse bg-base-300 ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <div className="collapse bg-base-300 max-w-max">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Click me to show/hide content
            </div>
            <div className="collapse-content">
              <div className="collapse bg-base-300 max-w-max">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Click me to show/hide content
                </div>
                <div className="collapse-content">
                  <div className="collapse bg-base-300 max-w-max">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                      Click me to show/hide content
                    </div>
                    <div className="collapse-content">
                      <div className="collapse bg-base-300 max-w-max">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                          Click me to show/hide content
                        </div>
                        <div className="collapse-content">
                          <p>hello</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
