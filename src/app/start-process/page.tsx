"use client";

import { HandleChangeFields } from "@/protocols";
import { createProcess } from "@/services";
import Head from "next/head";
import React, { useState } from "react";

export default function StartProcess() {
  const [body, setBody] = useState({
    name: "",
    areaId: 1,
    description: "",
  });

  function handleChange(e: HandleChangeFields) {
    console.log(e.target.value);
    setBody({ ...body, [e.target.name]: e.target.value });
  }

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
    <>
      <Head>
        <title>Iniciar Processo</title>
      </Head>

      <main className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-primary">
            <h1 className="text-5xl font-bold">Abra um novo processo</h1>
            <p className="py-6 text-xl">
              Dê um nome ao processo, selecione a área e descreva o processo.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input
                  className="input input-bordered text-primary"
                  name="name"
                  value={body.name}
                  type="text"
                  placeholder="Nome"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Area</span>
                </label>
                <select
                  name="areaId"
                  className="select select-bordered w-full text-primary"
                  onChange={handleChange}
                  defaultValue={body.areaId}
                >
                  <option value={1}>Area 1</option>
                  <option>Area 2</option>
                  <option>Area 3</option>
                  <option>Area 4</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Descrição</span>
                </label>

                <textarea
                  className="textarea textarea-bordered text-primary"
                  name="description"
                  value={body.description}
                  placeholder="Informe detalhes sobre o processo"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Abrir processo
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
