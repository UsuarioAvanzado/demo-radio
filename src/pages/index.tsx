import type { NextPage } from 'next' 
import type { Station } from 'radio-browser-api'
import { useState, useEffect } from "react"
import { StationBlock, Loading, Head, ColorSchema, Navbar } from "@components"
import style from './style.module.scss'
import { useStream, useStoreState } from "@hooks";
import { colorSchemaSelector } from "@store";



const Home: NextPage = () => {
  const colorSchema = useStoreState(colorSchemaSelector)
  const { response, error } = useStream()
  const [ data, setData ] = useState<Station[]>()
  

  useEffect(() => { 
    setTimeout(() =>  setData(response) , 3000)
  },[response])



  if (error) return <Loading msg="Failed to load."/>
  if (!data) return <Loading msg="Loading ..."/>

  
  return (
    <div className={`${style.wrapper} color-schema--${colorSchema}`}>
      <Head/>

      <header className={`block ${style.header}`}>
        <h1>Open Radio</h1>
      </header>
      <Navbar/>

      <section className={`block ${style.favorites}`}>favoritos</section>
      <section className={`block ${style.stations}`}>
        { data.map((station: Station) => <StationBlock  key={station.id} {...station}/> )}
      </section>

      <section className={`block ${style.player}`}>
        panel de control
      </section>

      <footer className={`block ${style.footer}`}>footer</footer>

    </div>
  )
}


export default Home
