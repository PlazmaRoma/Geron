// // Level 1
export enum hubs {
  tech = "Технический",
  turbo = "Турбинный цех",
  chemical = "Химический"
}

export type TParams = {
  width: number, 
  height: number, 
  weight: number
}

export type TDetail = {
  title:string,
  params:TParams
}

export type THubInfo = {
  name: string,
  details: TDetail[],
  mainEngineer: string,
  deadline: string
}

export type THubs = {
  tech: THubInfo[],
  turbo: THubInfo[],
  chemical: THubInfo[]
}