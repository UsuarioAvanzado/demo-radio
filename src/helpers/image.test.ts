import { checkImage } from "./image";

describe("Check if source is a image", ()=>{
  let source: any

  test("Test if url is a image", ()=>{
    source = "https://radiomotiva.cl/gallery/favicon.ico"
    expect(checkImage(source)).toBeTruthy()

  })

  test("Test if url is empty" , ()=>{
    source = ""
    expect(checkImage(source)).toBeFalsy()
  })
})
