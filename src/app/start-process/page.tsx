"use client";

import { FormCreateProcess } from "@/components";
import { CreateProcess, HandleChangeFields } from "@/protocols";
import { createProcess } from "@/services";
import React, { useState } from "react";

export default function StartProcess() {
  const [body, setBody] = useState<CreateProcess>({
    name: "",
    areaId: 1,
    description: "",
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
          <h1 className="text-5xl font-bold">Abra um novo processo</h1>
          <p className="py-6 text-xl">
            Dê um nome ao processo, selecione a área e descreva o processo.
          </p>
        </div>
        <FormCreateProcess
          body={body}
          setBody={setBody}
          handleSubmit={handleSubmit}
        >
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Abrir processo
            </button>
          </div>
        </FormCreateProcess>
      </div>
    </main>
  );
}
