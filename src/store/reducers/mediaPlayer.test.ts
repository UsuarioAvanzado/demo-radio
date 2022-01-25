import { mediaPlayerReducer } from "./mediaPlayer"
import { defaultStation as fakeStation } from "./mediaPlayer"
import type { State, Action } from './mediaPlayer'


describe("Test of mediaPlayerReducer", ()=> {
  let initialState: State
  let expectState: State
  let action: Action
  
  test("Switch media player to start", ()=>{
    initialState = {
      station: undefined,
      playing: false
    }

    action  = {
      type : "@media/start", 
      payload : fakeStation
    }

    expectState = {
      station: fakeStation,
      playing: true
    }

    expect(mediaPlayerReducer(initialState, action)).toStrictEqual(expectState)
  })
  
  test("Switch media player to pause", ()=>{
    initialState = {
      station: fakeStation,
      playing: true
    }

    action = {
      type : "@media/pause", 
      payload : fakeStation
    }

    expectState = {
      station: fakeStation,
      playing: false
    }
      expect(mediaPlayerReducer(initialState, action)).toStrictEqual(expectState)
  })
  
  test("To stop", ()=>{
    initialState = { 
      station: fakeStation,
      playing: true
    }

    action = {
      type: '@media/stop',
      payload: fakeStation
    }

    expectState = {
      station: undefined,
      playing: false
    }

    expect(mediaPlayerReducer(initialState, action)).toStrictEqual(expectState)
  })
})

