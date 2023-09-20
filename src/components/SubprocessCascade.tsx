import { GetProcess } from "@/protocols";

export function SubprocessCascade(process: GetProcess) {
  return (
    <ul className="list-disc pl-5">
      {process.subProcess.map((subprocess) => (
        <li key={subprocess.id}>
          {subprocess.name}
          {subprocess.subProcess.length > 0 && (
            <SubprocessCascade {...subprocess} />
          )}
        </li>
      ))}
    </ul>
  );
}
