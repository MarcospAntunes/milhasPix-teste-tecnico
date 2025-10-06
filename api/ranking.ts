import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const value = req.query.value || '0';
  try {
    const response = await fetch(`https://api.milhaspix.com/simulate-ranking?mile_value=${value}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar ranking' });
  }
}
