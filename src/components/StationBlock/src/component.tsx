import { useState, useRef, useEffect } from 'react'
import type { Station } from "radio-browser-api";
import style from './style.module.scss'



export function Component( station: Station ) {
  return (
    <div className={style.wrapper}>

      <section className={style.info}>
        <span>name: {station.name}</span>
      </section>
      <section className={style.control}>
        control
      </section>
    </div>
  )
}
