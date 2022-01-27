import type { NextPage } from 'next' 
import type { Station } from 'radio-browser-api'
import { RadioBrowserApi } from 'radio-browser-api'
import { useState } from "react"
import { StationBlock, Loading, Head, Navbar, MediaPlayer } from "@components"
import styles from './style.module.scss'
import { useStoreState } from "@hooks";
import { selectors } from "@store";



export async function getStaticProps(){
  const api = new RadioBrowserApi("frontend demo")
  api.setBaseUrl('https://de1.api.radio-browser.info')
  const responseStations = await api.searchStations({
    countryCode: 'CL',
    hideBroken: true,
    removeDuplicates: true,

  })

  const stations = JSON.stringify(responseStations)
  return {
    props: {
      data: {
        stations
      }
    }
  }

}

interface StaticProps {
  data: {
    stations: string,
    countryCodes: string
  }
  
}
interface TemplateProps {
  stations: Station[]
}

function Template(props: TemplateProps) {
  const colorSchema = useStoreState(selectors.colorSchema)
  return (
      <div className={`${styles.wrapper} ${colorSchema}`}>
        <Head/>
        <Navbar/>
        <MediaPlayer/>

        <header className={`block content ${styles.header}`}>
          <h1>Demo Radio</h1>
        </header>
        <section className={`block content ${styles.favorites}`}>Favoritos</section>
        <section className={`block ${styles.stations}`}>
          { 
            props.stations.map((station) => <StationBlock  key={station.id} {...station}/> )
          }
        </section>
        <footer className={`block ${styles.footer}`}>footer</footer>
      </div>
    )
}


const Page: NextPage<StaticProps> = (props) => {
  let render: boolean = true
  const [ stations ] = useState<Station[]>(JSON.parse(props.data.stations))

  if (!render) {
    return <Loading msg="loading"/>
  }
  else {
    return <Template stations={stations}/>
  }
}


export default Page

