import { GetProcess } from "@/protocols";

export function SubprocessCascade(process: GetProcess) {
  return (
    <div className="collapse bg-primary mt-5  px-1">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium ">{process.name}</div>
      <div className="collapse-content bg-base-100 pl-4 pr-1 ">
        <div> name: {process.name}</div>
        <div> id: {process.id}</div>
        {process.description && <div> description: {process.description}</div>}
        {process.subProcess.length > 0 && <div>subprocessos:</div>}
        {process.subProcess.map((subprocess) => (
          <SubprocessCascade key={subprocess.id} {...subprocess} />
        ))}
      </div>
    </div>
  );
}
