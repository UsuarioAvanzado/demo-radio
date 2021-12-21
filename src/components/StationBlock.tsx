import { useState, useRef, useEffect } from 'react'
import { Station } from "radio-browser-api";
import styles from '@/styles/components/StationBlock.module.scss'



export function Component( props: Station ) {
  let [streamState, setStreamState]: any = useState("play");
  const [favicon, setFavicon ]: any = useState("")
  const audioRef: any = useRef(HTMLAudioElement)

  useEffect(()=> {
    if(props.favicon == "" ) {
      setFavicon("https://www.adnradio.cl/_templates/desktop/includes/img/logo.png")
    } 
    else {
      setFavicon(props.favicon)
    }

  }, [props.favicon])
  function handleStream() {
    const stream = audioRef.current

    if (stream.paused) {
      stream.play()
      setStreamState('pause')
    } else {
      stream.pause()
      setStreamState("play")
    }
  }
    
  return (
    <section className={styles.container}>
      <section className={styles.audio}>
        <audio  ref={audioRef} controls={false} autoPlay={false}><source src={props.urlResolved}></source></audio>
      </section>
      <section className={styles.info}>
        <img src={favicon} alt="NO-ENCONTRADO" width="100" />
      </section>
      <section className={styles.control}>
        <button onClick={handleStream}>{streamState}</button>
      </section>
    </section>
  )
}
