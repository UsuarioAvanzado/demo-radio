import type { Station } from "radio-browser-api"
import styles from './style.module.scss';
import { useStoreDispatch , useStoreState} from "@hooks";
import { selectors } from "@store"
import type { MediaPlayerState } from '@store'
import { useEffect, useState } from "react";

export function Component( station: Station ) {
  const dispatch = useStoreDispatch()
  const mediaState = useStoreState<MediaPlayerState>(selectors.mediaPlayer)
  const [ favicon, setFavicon ] = useState(station.favicon)

  useEffect(()=>{
    if(!station.favicon){
      setFavicon('/default/favicon.png')
    }
  }, [station.favicon])

  const onError = ()=> {
    setFavicon('/default/favicon.png')
  }

  const handler = ()=> {
   if(mediaState.station && mediaState.station.id == station.id) {
     dispatch({type: '@media/toggle'})
   } 
   else {
     dispatch({type: '@media/start', payload: station})
   }
  }

  return (
    <div className={`${styles.wrapper} shadow`}>
      <section className={styles.info}>
        <span className={`content ${styles.name}`}>{station.name}</span>
        <span className={`content ${styles.id}`}>{station.id}</span>
      </section>
      <section className={styles.control} onClick={handler}>
        <span className={styles.image_container}>
          <img 
          src={favicon} 
          className={styles.image} 
          alt="logo"
          onError={onError}/>
        </span>
      </section>
    </div>
  )
}
