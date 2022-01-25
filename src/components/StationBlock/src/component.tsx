import type { Station } from "radio-browser-api";
import styles from './style.module.scss';
import { useStoreDispatch , useStoreState} from "@hooks";
import { selectors } from "@store";
import type { MediaPlayerState } from '@store'

export function Component( station: Station ) {
  const dispatch = useStoreDispatch()
  const mediaState = useStoreState<MediaPlayerState>(selectors.mediaPlayer)

 
  function handler(){
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
        <span className={`content ${styles.content}`}>{station.name}</span>
        <span className={`content ${styles.content}`}>{station.urlResolved}</span>
        <span className={`content ${styles.content}`}>radio info</span>
      </section>
      <section className={styles.control}>
        <span onClick={handler} className={styles.image_container}>
          <img src={station.favicon} className={styles.image} alt="logo"/>
        </span>
      </section>
    </div>
  )
}
