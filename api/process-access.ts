import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, amount } = req.body;

    const paymentLink = `https://gateway-provider.com/checkout?amount=43.12&ref=${userId}`;
    
    return res.status(200).json({ url: paymentLink });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
