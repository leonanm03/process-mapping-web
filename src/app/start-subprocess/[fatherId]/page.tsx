export default function StartSubprocess({
  params,
}: {
  params: { fatherId: string };
}) {
  return <div>{params.fatherId}</div>;
}
