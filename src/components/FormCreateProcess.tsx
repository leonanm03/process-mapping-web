"use client";
import { Area, CreateProcessForm, HandleChangeFields } from "@/protocols";
import { getAreas } from "@/services";
import { useEffect, useState } from "react";

export function FormCreateProcess({
  body,
  setBody,
  handleSubmit,
  children,
}: CreateProcessForm) {
  const [areas, setAreas] = useState<Area[]>([]);

  function handleChange(e: HandleChangeFields) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  function handleAreaIdChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setBody({ ...body, [e.target.name]: parseInt(e.target.value) });
  }

  useEffect(() => {
    getAreas().then((areas) => {
      setBody({ ...body, areaId: areas[0].id });
      setAreas(areas);
    });
  }, []);

  return (
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
            onChange={handleAreaIdChange}
            value={body.areaId}
          >
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
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
        {children}
      </form>
    </div>
  );
}
