import type { NextPage } from 'next' 
import type { Station } from '@helpers'
import { Layout } from '@components'
import { getStations } from "@helpers";


interface Props {
  stations: string,
}


export async function getStaticProps(){
  const stations = await getStations("CL").then(( response ) => {
    return JSON.stringify(response)
  })
  return {
    props: {
      stations
    }
  }
}


const Home: NextPage<Props> = (props) => {
  const stations: Station[] = JSON.parse(props.stations)
    return <Layout stations={stations}/>
}


export default Home

