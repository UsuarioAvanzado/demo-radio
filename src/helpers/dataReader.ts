export type Station = {
  changeId: string
  id: string
  name: string
  url: string
  urlResolved: string
  homepage: string
  favicon: string
  tags: string[]
  country: string
  countryCode: string
  state: string
  language: string[]
  votes: number
  lastChangeTime: Date
  codec: string
  bitrate: number
  hls: boolean
  lastCheckOk: boolean
  lastCheckTime: Date
  lastCheckOkTime: Date
  lastLocalCheckTime: Date
  clickTimestamp: Date
  clickCount: number
  clickTrend: number
}

export interface Country {
  name: string
  stationcount: number
  flag: string
}
export async function getStations(country: null| string= null, stations: Station[]= []) {
  const data: Station[] = await import('../../data/stations.json').then( ( response ) =>{
    return JSON.parse(JSON.stringify(response.default))
  })

  if (country){
    for(const station in data){
      if (data[station].countryCode === country.toUpperCase()){
        stations.push(data[station])
      }
    }
    return stations
  }
  else {
    return data
  }
}

export async function getCountries() {
  const countries: Country[] = await import('../../data/countries.json').then((response)=>{
    return JSON.parse(JSON.stringify(response.default))
  })
 return countries
}
