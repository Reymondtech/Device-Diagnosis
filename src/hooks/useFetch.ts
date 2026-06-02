import { useState } from "react";


export function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const request = async (callback: () => Promise<any>) => {
    try {
      setLoading(true);
      setError("");
      return await callback();
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, request };
}
