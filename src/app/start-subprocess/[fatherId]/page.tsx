"use client";
import { FormCreateProcess } from "@/components";
import { CreateProcess } from "@/protocols";
import { createProcess } from "@/services";
import { useState } from "react";

export default function StartSubprocess({
  params,
}: {
  params: { fatherId: string };
}) {
  const [body, setBody] = useState<CreateProcess>({
    name: "",
    areaId: 1,
    description: "",
    fatherProcessId: params.fatherId,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await createProcess(body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-primary">
          <h1 className="text-5xl font-bold">Abra um subprocesso</h1>
          <p className="py-6 text-xl">
            Dê um nome ao subprocesso, selecione a área e descreva o
            subprocesso.
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
                Abrir subprocesso
              </button>
            </div>
          </FormCreateProcess>
        </div>
      </div>
    </main>
  );
}
