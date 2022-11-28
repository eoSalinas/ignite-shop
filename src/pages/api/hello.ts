import { NextApiRequest, NextApiResponse } from 'next'

export default function hello(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ menssage: 'hello world!' })
}
