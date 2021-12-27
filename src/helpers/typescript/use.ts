import type { Station } from "radio-browser-api"
import { RadioBrowserApi } from "radio-browser-api";
import  useSWR  from "swr";


async function fetcher(): Promise<Station[]> {
  const api = new RadioBrowserApi('frontend demo - dev mode')  
  const data: Station [] = await api.searchStations({
    countryCode: 'CL',
    limit: 50
  }) 
  return data
}

export function useStream() {
  const { data, error } = useSWR(`api`, fetcher)
  return {
    response: data,
    loading: !error && !data,
    error: error
  }
}

