import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch("https://api.milhaspix.com/simulate-offers-list");
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dados da API", message: err });
  }
}
