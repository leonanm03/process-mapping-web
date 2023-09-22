export default function Home() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold">
            Olá, bem-vindo(a) ao <br />
            Process Mapping
          </h1>
          <p className="py-6">
            Aqui você poderá mapear e gerenciar seus processos de sua empresa de
            forma simples e intuitiva.
          </p>
          <a href="/processes" className="btn btn-primary m-6">
            Processos
          </a>
          <a href="/start-process" className="btn btn-primary m-6">
            Novo processo
          </a>
        </div>
      </div>
    </main>
  );
}
