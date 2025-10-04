/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/simulate-ranking", async (req: any, res: any) => {
  const { mile_value } = req.query;
  try {
    const response = await fetch(`https://api.milhaspix.com/simulate-ranking?mile_value=${mile_value}`);
    const data = await response.json();
    res.json(data);
  } catch(err) {
    res.status(500).json({ error: "Erro ao buscar dados da API", message: err });
  }
});

app.listen(3000, () => console.log("Proxy rodando na porta 3000"));
