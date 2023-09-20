"use client";

import Head from "next/head";
import React, { useState } from "react";

export default function StartProcess() {
  const [body, setBody] = useState({
    name: "",
    areaId: null,
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Head>
        <title>Enviar Objeto</title>
      </Head>

      <main className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-primary">
            <h1 className="text-5xl font-bold">Abra um novo processo</h1>
            <p className="py-6">
              Escreva o nome do objeto, dê sua descrição, escolha a categoria e
              envie<strong> ao menos 3 (três)</strong> imagens dele.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <form className="card-body">
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
                  name="category"
                  className="select select-bordered w-full text-primary"
                >
                  <option>Area 1</option>
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
