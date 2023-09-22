export function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          <img src="https://stage.consulting/favicon.png" alt="logo" />
          Process Mapping
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-10">
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/processes">Processos</a>
            </li>
            <li>
              <a href="/start-process">Abrir processo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
