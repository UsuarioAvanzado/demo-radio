import {  useEffect } from "react";
import { selectors } from "@store";
import { useStoreState, useStoreDispatch } from "@hooks";
import  styles  from "./style.module.scss";


export function Component(){
  const dispatch = useStoreDispatch()
  const notification = useStoreState(selectors.notification)
  useEffect(()=>{
    if(notification.show) {
      setTimeout(()=>{
        dispatch({type: "@notification/hidden"})
      }, 5000);
    }

  }, [notification.show, dispatch]) 



  if(!notification.show) return null

  return(
    <div className={`notification ${styles.container}`}>
      <span className={styles.text}>{notification.message}</span>
    </div>
  )
}
