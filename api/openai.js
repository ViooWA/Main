const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Mengaktifkan routing agar URL tidak membutuhkan ekstensi .js
app.get("/api/openai", async (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({
            error: "Text query parameter is required. Example usage: ?text=hello",
        });
    }

    try {
        // Simulasi respons dari OpenAI atau API lain
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

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});