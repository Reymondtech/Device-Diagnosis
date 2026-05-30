import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Result() {
  const { diagnosis } = useContext(AppContext);

  if (!diagnosis) return <p>No diagnosis available</p>;

  if (diagnosis.error) {
    return (
      <div className="container">
        <h1>AI Error</h1>
        <p>{diagnosis.error}</p>
        <pre>{diagnosis.raw}</pre>
      </div>
    );
  }
console.log(diagnosis)
  return (
    <div className="container">
      <h1>AI Diagnosis Result</h1>

      <div className="result-card">
        <h3>Explanation</h3>
        <p>{diagnosis.explanation}</p>

        <h3>Likely Cause</h3>
        <p>{diagnosis.cause}</p>

        <h3>Recommended Solution</h3>
        <p>{diagnosis.solution}</p>

        <h3>Severity</h3>
        <p><strong>{diagnosis.severity}</strong></p>

        <h3>Safe to Use?</h3>
        <p><strong>{diagnosis.safeToUse}</strong></p>
      </div>
    </div>
  );
}
