import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

import { IAPIStatusRequest, ICPTMResponse, IViaQuatroMobilidadeResponse } from '~/types'

function fixFormatedDate(date: string): Date {
  const slicedDate = date.split(' ')

  if (slicedDate.length === 2) {
    const [day, month, year] = slicedDate[0].split('/')
    const [hour, minute] = slicedDate[1].split(':')

    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute))
  } else {
    return null
  }
}

interface APIStatusLine {
  DataGeracao: string
  Descricao?: string
  LinhaId: number
  Nome: string
  Status: string
  Tipo: 'M'|'C'|'4'|'5'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const lines: IAPIStatusRequest['lines'] = []
    const masterResponse = await axios.get<APIStatusLine[]>(process.env.MASTER_REQUEST_URL)

    masterResponse.data.map(line => {
      lines.push({
        id: line.LinhaId,
        name: line.Nome,
        operator: line.Tipo,
        status: line.Status,
        details: line.Descricao,
        updatedAt: fixFormatedDate(line.DataGeracao)
      })
    })

    return res.status(200).json({ lines: lines.sort((a, b) => a.id - b.id) })
  } catch (err) {
    console.log(err)

    return res.status(500).json({ error: err.message ?? 'Internal server error' })
  }
}
