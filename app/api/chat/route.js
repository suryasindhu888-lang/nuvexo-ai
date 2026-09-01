export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || !message.trim()) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message.trim(),
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        {
          error:
            data?.error?.message ||
            `Gemini API error (${response.status})`,
        },
        { status: response.status }
      );
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return Response.json(
        { error: "Gemini returned no response." },
        { status: 502 }
      );
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("Nuvexo API error:", error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      { status: 500 }
    );
  }
}