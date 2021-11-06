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

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const lines: IAPIStatusRequest['lines'] = []

    const cptm = await axios.get<ICPTMResponse[]>(process.env.CPTM_API_URL)
    const viaQuatro = await axios.get<IViaQuatroMobilidadeResponse>(process.env.VIA_QUATRO_API_URL)
    const viaMobilidade = await axios.get<IViaQuatroMobilidadeResponse>(process.env.VIA_MOBILIDADE_API_URL)

    if (viaQuatro.data.CurrentLineStatus) {
      lines.push({
        id: 4,
        name: 'AMARELA',
        operator: '4',
        status: viaQuatro.data.CurrentLineStatus.Status,
        details: viaQuatro.data.CurrentLineStatus.FinalDescription,
        updatedAt: fixFormatedDate(viaQuatro.data.CurrentLineStatus.DateUpdateFormated)
      })
    }

    if (viaMobilidade.data.CurrentLineStatus) {
      lines.push({
        id: 5,
        name: 'LILÁS',
        operator: '5',
        status: viaMobilidade.data.CurrentLineStatus.Status,
        details: viaMobilidade.data.CurrentLineStatus.FinalDescription,
        updatedAt: fixFormatedDate(viaMobilidade.data.CurrentLineStatus.DateUpdateFormated)
      })

      for (const metroLine of viaMobilidade.data.StatusMetro.ListLineStatus) {
        lines.push({
          id: parseInt(metroLine.Id, 10),
          name: metroLine.Line.replace(`Linha ${metroLine.Id} - `, '').toUpperCase(),
          operator: 'M',
          status: metroLine.StatusMetro,
          details: metroLine.Description,
          updatedAt: fixFormatedDate(viaMobilidade.data.StatusMetro.DateUpdateMetro)
        })
      }
    }

    for (const cptmLine of cptm.data) {
      if (!lines.map((l) => l.id).includes(cptmLine.LinhaId) && cptmLine.Tipo === 'C') {
        lines.push({
          id: cptmLine.LinhaId,
          name: cptmLine.Nome,
          operator: 'C',
          status: cptmLine.Status,
          details: cptmLine.Descricao,
          updatedAt: new Date(cptmLine.DataGeracao)
        })
      }
    }

    return res.status(200).json({ lines: lines.sort((a, b) => a.id - b.id) })
  } catch (err) {
    console.log(err)

    return res.status(500).json({ error: err.message ?? 'Internal server error' })
  }
}
