import  styles  from "@/styles/components/Loading.module.scss";

interface Props {
  msg?: string
}

export function Component( props: Props ){
  return(
    <div className={styles.container}>
      <span className={styles.text}>{props.msg}</span>
    </div>
  )
}
