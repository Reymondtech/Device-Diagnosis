import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Result() {
  const { diagnosis } = useContext(AppContext);

  if (!diagnosis) return <p>No diagnosis available</p>;

  return (
    <div className="container">
      <h1>Diagnosis Result</h1>

      <p><strong>Explanation:</strong> {diagnosis.explanation}</p>
      <p><strong>Solution:</strong> {diagnosis.solution}</p>
    </div>
  );
}
