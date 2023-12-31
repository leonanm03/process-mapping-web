"use client";
import { FormCreateProcess } from "@/components";
import { UpdateProcess } from "@/protocols";
import { GetProcess, updateProcess } from "@/services";
import { useEffect, useState } from "react";

export default function EditSubprocess({
  params,
}: {
  params: { processId: string };
}) {
  const [body, setBody] = useState<UpdateProcess>({
    name: "",
    areaId: 1,
    description: "",
  });

  useEffect(() => {
    const process = GetProcess(params.processId)
      .then((process) => {
        setBody({
          name: process.name,
          areaId: process.areaId,
          description: process.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await updateProcess(params.processId, body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-primary">
          <h1 className="text-5xl font-bold">Edite o processo {body.name}</h1>
          <p className="py-6 text-xl">
            Altere as informações que deseja e clique em salvar
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <FormCreateProcess
            body={body}
            setBody={setBody}
            handleSubmit={handleSubmit}
          >
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                salvar
              </button>
            </div>
          </FormCreateProcess>
        </div>
      </div>
    </main>
  );
}
