import { useParams } from "react-router";

export function PaintingDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Painting Details Page</h1>
      <h2>{id}</h2>
    </div>
  );
}
