import styles from "./style.module.scss";
import { useState } from "react";
import { useStoreState } from "@hooks";
import { colorSchemaSelector } from "@store";

import { ColorSchema } from "@components";


export function Component(){
  const [ state, setState ] = useState("collapse");
  const colorSchema = " color-schema--" + useStoreState(colorSchemaSelector)
  const collapse = styles.collapse.concat(colorSchema)
  const expand = styles.expand.concat(colorSchema)
  const collapse_icon = styles.icon.concat(" icon icon-collapse")
  const expand_icon = styles.icon.concat(" icon icon-expand")

  if (state == "collapse"){
      return (
        <nav className={collapse}>
          <span className={collapse_icon} onClick={()=> setState("expand")}></span>
          <div className={styles.colorSchema}>
            <ColorSchema/>
          </div>
        </nav>
    )
  }
  return(
    <nav className={expand}>
      <span className={expand_icon} onClick={()=> setState("collapse")}></span>
      <div className={styles.colorSchema}><ColorSchema/></div>
      <ul className={styles.items}>
        <li><a href="">about</a></li>
      </ul>
    </nav>
    )
}
