import { GetProcess } from "@/protocols";

export function ProcessData(process: GetProcess) {
  const { id, name, description, fatherProcessId, area } = process;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Identificação</th>
            <th>Nome</th>
            <th>Área</th>
            <th>Descrição</th>
            <th>Processo Pai</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{area.name}</td>
            <td>{description}</td>
            <td>{fatherProcessId}</td>
            <td>
              <div>
                <div className="flex flex-col py-0">
                  <a
                    href={`/start-subprocess/${id}`}
                    className="btn btn-accent btn-xs m-1"
                  >
                    Novo Subprocesso
                  </a>
                  <a
                    href={`/edit-process/${id}`}
                    className="btn btn-primary btn-xs m-1"
                  >
                    Editar
                  </a>
                  <button className="btn btn-secondary btn-xs m-1">
                    Excluir
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
