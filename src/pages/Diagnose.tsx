import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import AppContext from "../context/AppContext";
import { useFetch } from "../hooks/useFetch";
import { diagnoseAI } from "../api/api";


export default function Diagnose() {
  const { device } = useParams();
  const { setDiagnosis } = useContext(AppContext);
  const { register, handleSubmit } = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  

  const onSubmit = async (data: any) => {
    const result = await request(() =>
      diagnoseAI(device!, data.problem)
    );

    if (result) {
      setDiagnosis(result);
      console.log(result)
      navigate("/result");
    }
  };

  return (
    <div className="container">
      <h2>Describe the problem with your {device}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("problem", { required: true })}
          placeholder="Describe the issue..."
        />

        <button type="submit">Diagnose with AI</button>
      </form>

      {loading && <p>AI is analyzing your device…</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
