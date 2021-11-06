import { ILineColor, ILinesColor } from '~/types'

export const lineColors = (id: number): ILineColor => {
  const lineColors: ILinesColor = {
    1: { background: '#171796', text: '#FFFFFF' },
    2: { background: '#007A5E', text: '#FFFFFF' },
    3: { background: '#ED2E38', text: '#FFFFFF' },
    4: { background: '#FFD525', text: '#222222' },
    5: { background: '#BA1FB5', text: '#FFFFFF' },
    7: { background: '#9E1766', text: '#FFFFFF' },
    8: { background: '#9E9E93', text: '#FFFFFF' },
    9: { background: '#00A78E', text: '#FFFFFF' },
    10: { background: '#007C8F', text: '#FFFFFF' },
    11: { background: '#F04D22', text: '#FFFFFF' },
    12: { background: '#083E89', text: '#FFFFFF' },
    13: { background: '#00AB5B', text: '#FFFFFF' },
    15: { background: '#8F8F8C', text: '#FFFFFF' }
  }

  return lineColors[id]
}
