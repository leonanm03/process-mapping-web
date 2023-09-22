import { GetProcess } from "@/protocols";
import { ProcessData } from ".";

export function SubprocessCascade(process: GetProcess) {
  return (
    <div className="collapse bg-primary mt-5  px-1 pb-1">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium ">{process.name}</div>
      <div className="collapse-content bg-base-100 pl-4 pr-1 ">
        <ProcessData {...process} />
        {process.subProcess.length > 0 && (
          <div className="mt-3 text-l font-medium">subprocessos:</div>
        )}
        {process.subProcess.map((subprocess) => (
          <SubprocessCascade key={subprocess.id} {...subprocess} />
        ))}
      </div>
    </div>
  );
}
