export interface Storage {
  theme: 'dark' | 'light'
  cookieConsent: boolean
}

export interface IAPIStatusRequest {
  lines: IStatusLine[]
}

export interface ILineColor {
  background: string
  text: string
}

export interface ILinesColor {
  [x: number]: ILineColor
}

export interface IStatusLine {
  id: number
  name: string
  status: string
  details: string
  operator: 'M' | '4' | '5' | 'C'
  updatedAt: Date
}

export interface ICPTMResponse {
  Status: string
  Descricao: string
  LinhaId: number
  Nome: string
  Tipo: string
  DataGeracao: string
}

export interface IViaQuatroMobilidadeResponse {
  CurrentLineStatus: ViaQuatroMobilidadeCurrentLineStatus
  StatusMetro: ViaQuatroMobilidadeStatusMetro
  DateUpdateMetro: string
}

export interface ViaQuatroMobilidadeCurrentLineStatus {
  DateUpdateFormated: string
  Status: string
  FinalDescription: any
}

export interface ViaQuatroMobilidadeStatusMetro {
  ListLineStatus: ViaQuatroMobilidadeListLineStatus[]
  DateUpdateMetro: string
}

export interface ViaQuatroMobilidadeListLineStatus {
  Id: string
  Color: string
  Line: string
  LineRaw: string
  StatusMetro: string
  Status: number
  Description: string
}
