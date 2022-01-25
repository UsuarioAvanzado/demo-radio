import { useState, useEffect } from "react";
import {  selectors } from "@store";
import { useStoreDispatch, useStoreState } from "@hooks";
import  styles  from "./style.module.scss";

export function Component(){
  const [ state, setState ] = useState<string>()
  const dispatch = useStoreDispatch() 
  const colorSchema  = useStoreState(selectors.colorSchema)

  const area = {
    wrapper: styles.wrapper,
    container: styles.container.concat(" block-reverse shadow"),
    dark : styles.dark.concat(" icon-dark icon"),
    light : styles.light.concat(" icon-light icon"),
    circle : styles.switch.concat(" switch icon block")
  }

  useEffect(() => {

    switch (colorSchema) {
      case "color-schema--dark": {
        setState("right"); break
      }
      default: {
        setState("left"); break
      }
    }
  }, [colorSchema])


  return(
    <div className={area.wrapper} onClick={ () => dispatch({type: "@color-schema/toggle"}) } >
      <span className={area.container}>
      <span className={area.dark}></span>
      <span className={area.light}></span>
      <span className={area.circle}></span>
      <style jsx>{`.switch {${state}: 0}`}</style>
    </span>
    </div>
  )
}
