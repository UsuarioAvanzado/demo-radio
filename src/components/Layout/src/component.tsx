import { useState } from "react";
import type { Station } from '@helpers'
import { StationBlock, Head, Navbar, MediaPlayer } from "@components"
import { useStoreState } from "@hooks";
import { selectors } from "@store";
import styles from './style.module.scss'


interface Props {
  stations: Station[]
}


export function Component(props: Props) {
  const colorSchema = useStoreState(selectors.colorSchema)
  const [ stations ] = useState(props.stations)
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
            stations.map((station) => <StationBlock  key={station.id} {...station}/> )
          }
        </section>
        <footer className={`block ${styles.footer}`}>footer</footer>
      </div>
    )
}
