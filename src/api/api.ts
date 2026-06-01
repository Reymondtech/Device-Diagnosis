export async function diagnoseAI(device: string, problem: string) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_GROQ_KEY}`
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content:
            "You are an expert technician. Analyze the user's problem with their " +
            device +
            ". Problem: \"" +
            problem +
            "\". Return ONLY valid JSON with the following structure: " +
            "{ explanation: string, cause: string, solution: string, severity: \"Low\" | \"Medium\" | \"High\", safeToUse: \"Yes\" | \"No\" }. " +
            "Do not include anything outside the JSON."
        }
      ],
      temperature: 0.2
    })
  });

  const data = await response.json();

  const content = data.choices?.[0]?.message?.content;
  const extractedContent = extractCorrectJson(content)
  console.log({extractedContent});
  try {
    return JSON.parse(extractedContent);
  } catch {
    return { error: "AI returned invalid JSON", raw: content };
  }
}
function extractCorrectJson (incorrectJson) {
  const correctJson = incorrectJson.slice(incorrectJson.indexOf('{'), incorrectJson.lastIndexOf('}')+1)
  return correctJson
}