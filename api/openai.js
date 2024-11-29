const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/api/openai", async (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({
            error: "Text query parameter is required. Example usage: ?text=hello",
        });
    }

    try {
        const response = {
            result: `AI response to your text: ${text}`,
        };
        res.status(200).json({
            status: true,
            result: response.result,
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/uppercase", (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({
            error: "Text query parameter is required. Example usage: ?text=hello",
        });
    }

    try {
        const response = {
            result: text.toUpperCase(),
        };
        res.status(200).json({
            status: true,
            result: response.result,
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/charcount", (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({
            error: "Text query parameter is required. Example usage: ?text=hello",
        });
    }

    try {
        const response = {
            result: `Character count: ${text.length}`,
        };
        res.status(200).json({
            status: true,
            result: response.result,
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});