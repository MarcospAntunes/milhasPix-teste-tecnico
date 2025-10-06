import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { mile_value } = req.query;

  try {
    const response = await fetch(`https://api.milhaspix.com/simulate-ranking?mile_value=${mile_value}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dados da API", message: err });
  }
}
