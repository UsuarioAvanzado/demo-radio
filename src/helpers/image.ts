import type { Station } from "radio-browser-api";

export function checkImage(url: string) : boolean{
    const expresion = /^(https:\/\/)*.*\.(jpeg|jpg|gif|png|ico)$/
    return (url.match(expresion) != null)
}

export function sanitizeImageString(input: Station[]): Station[] {
   const output: Station[] = []
   for (let station of input){
     if (checkImage(station.favicon)){
       console.log(`Utilizar ${station.favicon}`)
       output.push(station)
     }
     else {
       console.log(`Remplazar ${station.favicon}`)
       station.favicon = "/default/favicon.png"
       output.push(station)
     }
   }
   return output
}
