import { useState, useEffect } from "react";

import  styles  from "./style.module.scss";

import { colorSchemaAction, colorSchemaSelector } from "@store";
import { useStoreDispatch, useStoreState } from "@hooks";


export function Component(){
  const [ state, setState ] = useState<string>()
  const dispatch = useStoreDispatch() 
  const colorSchema = useStoreState(colorSchemaSelector)


  let area = {
    dark : styles.icon_dark.concat(" icon-dark "),
    light : styles.icon_light.concat(" icon-light"),
    circle : 'switch ' + styles.circle
  }

  useEffect(() => {
    switch (colorSchema) {
      case "dark": {
        setState("right"); break
      }
      default: {
        setState("left"); break
      }
    }
  }, [colorSchema])

  return(
    <span className={styles.wrapper} onClick={()=> dispatch(colorSchemaAction)}>
      <span className={area.dark}></span>
      <span className={area.light}></span>
      <span className={area.circle}></span>

      <style jsx>{`.switch {${state}: 0}`}</style>
    </span>
  )
}
