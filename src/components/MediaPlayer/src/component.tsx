import { useEffect, useState, useMemo, useCallback } from 'react'
import styles from './style.module.scss'
import { useStoreState, useStoreDispatch } from "@hooks";
import { selectors } from "@store";
import type { MediaPlayerState} from '@store'
import type { Station } from "radio-browser-api";





interface WrapperProps {
  station: Station,
  playing: boolean

}



function Wrapper(props: WrapperProps) {
  const dispatch = useStoreDispatch()
  const [ icon, setIcon ] = useState<string>('icon-pause')
  const [ station, setStation ] = useState(props.station)
  const [ playing, setPlaying ] = useState(false)



  const stream = useMemo<HTMLAudioElement>(()=> {
    const audio = new Audio(station.urlResolved)
    audio.autoplay = false
    audio.preload = "none"
    audio.volume = 0.3
    audio.load()
    return audio
  } , [station])

  const handler = () => {
      dispatch({type: '@media/toggle'})
  }

  const playStream = useCallback( async ()=>{
    const errorMessage = "Error al reproducir esta emisora"
    try {
      await stream.play()
    }
    catch {
      if (stream.error != null){
        switch(stream.error.code) {
           case stream.error.MEDIA_ERR_ABORTED:
             dispatch({type: '@notification/show', payload: errorMessage})
           break
           case stream.error.MEDIA_ERR_NETWORK:
             dispatch({type: '@notification/show', payload: errorMessage})
           break
           case stream.error.MEDIA_ERR_DECODE:
             dispatch({type: '@notification/show', payload: errorMessage})
           break
           case stream.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            dispatch({type: '@notification/show', payload: errorMessage})

           break
        }

      setTimeout(()=>{ dispatch({type: '@media/stop'})}, 5000)
      }
    }
  },[stream, dispatch])

  useEffect(()=> {
    if(props.station.id != station.id){
      stream.pause()
      stream.removeAttribute('src')
      stream.load()
      setStation(props.station)
      setPlaying(props.playing)
    } else {

      setPlaying(props.playing)
    } 

  }, [props, station, stream])

  useEffect(()=>{
    playing ? setIcon('icon-pause'): setIcon('icon-play')
  }, [playing])

  useEffect(()=>{
    playing? playStream(): stream.pause()

  }, [playing, stream, playStream])

    return (
      <section className={`block ${styles.wrapper}`} >
        <div className={styles.image}>
          <img src={station.favicon} alt="logo radio "/>
        </div>
        <h1 className={styles.info}>{station.name}</h1> 
        <span className={`${icon} ${styles.toggle}`} onClick={handler}></span>
      </section>
    )
}


export function Component() {
  const storeState = useStoreState<MediaPlayerState>(selectors.mediaPlayer)
  const [ station, setStation ] = useState(storeState.station)
  const [ playing, setPlaying ] = useState(storeState.playing)
  
  useEffect(()=> {
    setStation(storeState.station)
    setPlaying(storeState.playing)
  },[storeState])
  if ( station == undefined ) {
    return null
  }
  else {
    return <Wrapper station={station} playing={playing}/> 
  }
}

