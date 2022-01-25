import { colorSchemaReducer } from "./colorSchema"
import type { Action, State } from "./colorSchema"


describe('Test of colorSchemaReducer', ()=>{
  let action: Action = {
    type: "@color-schema/toggle"
  }
  let initialState: State
  let expectState: State

  test("Switch to dark ", ()=>{
    initialState = {
      theme: 'color-schema--light'
    }
    expectState = {
      theme: 'color-schema--dark'
    }
    expect(colorSchemaReducer(initialState, action )).toStrictEqual(expectState)
  })
  
  test("Switch to light ", ()=>{
    initialState  = {
      theme: 'color-schema--dark'
    }
    expectState = {
      theme: 'color-schema--light'
    }
    expect(colorSchemaReducer(initialState, action)).toStrictEqual(expectState)
  })
})
