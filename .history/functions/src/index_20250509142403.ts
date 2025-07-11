import * as functions from "firebase-functions";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});

// ✅ Explicitly define HTTPS function
export const chatBot = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*"); // for frontend testing

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    return res.status(204).send("");
  }

  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).send("Message is required");
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: userMessage }],
    });

    const reply = completion.choices[0].message?.content || "Sorry, I didn't understand that.";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenAI error:", error);
    return res.status(500).json({ error: "Failed to get reply from OpenAI" });
  }
});