export async function diagnoseAI(device: string, problem: string) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_GROQ_KEY}`
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content:
            "You are an expert technician. Analyze the user's problem with their " +
            device +
            ". Problem: \"" +
            problem +
            "\". Return ONLY valid JSON with keys: explanation, cause, solution, severity, safeToUse."
        }
      ],
      temperature: 0.2
    })
  });

  const data = await response.json();

  const content = data.choices?.[0]?.message?.content;

  try {
    return JSON.parse(content);
  } catch {
    return { error: "AI returned invalid JSON", raw: content };
  }
}
