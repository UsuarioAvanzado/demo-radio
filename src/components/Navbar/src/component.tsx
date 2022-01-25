import styles from "./style.module.scss";
import { useState } from "react";

import { ColorSchemaSwitch } from "@components";


export function Component(){
  const [ state, setState ] = useState("collapse");

  if (state === 'collapse'){
    return (
      <nav className={`${styles.collapse} block `}>
        <span className={`${styles.icon} icon icon-collapse`} onClick={()=> setState("expand")}></span>
          <div className={styles.colorSchemaSwitch}>
            <ColorSchemaSwitch/>
          </div>
      </nav>
    )
  }
  else {
    return(
      <nav className={`${styles.expand} block`}>
        <span className={`${styles.icon} icon icon-expand`} onClick={()=> setState("collapse")}></span>
        <div className={styles.colorSchemaSwitch}>
          <ColorSchemaSwitch/>
        </div>
        <ul className={styles.items}>
          <li><a href="" className="content link">Menu item 1</a></li>
          <li><a href="" className="content link">Menu item 2</a></li>
          <li><a href="" className="content link">Menu item 3</a></li>
          <li><a href="" className="content link">Menu item 4</a></li>
        </ul>
      </nav>
    )
  }
}
