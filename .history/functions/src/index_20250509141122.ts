import * as functions from "firebase-functions";
import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: functions.config().openai.key,
});

export const chatBot = functions.https.onRequest(async (req, res) => {
const userMessage = req.body.message;

if (!userMessage) {
    res.status(400).send("Message is required");
    return;
}

try {
    const completion = await openai.chat.completions.create({
    model: "gpt-4", // or "gpt-3.5-turbo"
    messages: [{ role: "user", content: userMessage }],
});

const reply = completion.choices[0].message?.content || "Sorry, I didn't understand that.";
res.status(200).json({ reply });
} catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Failed to get reply from OpenAI" });
}
});