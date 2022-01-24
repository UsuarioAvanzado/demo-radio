import { Station } from "radio-browser-api";

const date = new Date(2000,2,2)
export const  defaultStation: Station = {
    changeId: "changeId",
    id: "id",
    name: "initialState",
    url: "url",
    urlResolved: "urlResolved",
    homepage: "homepage",
    favicon: "favicon",
    tags: [],
    country: "country",
    countryCode: "countryCode",
    state: "state",
    language: [],
    votes: 0,
    lastChangeTime: date,
    codec: "codec",
    bitrate: 0,
    hls: false,
    lastCheckOk: true,
    lastCheckTime: date,
    lastCheckOkTime: date,
    lastLocalCheckTime: date,
    clickTimestamp: date,
    clickCount: 10,
    clickTrend: 10
  }


export interface State {
  station: Station | undefined,
  playing: boolean
}

export interface Action {
  type: string,
  payload?: Station | undefined
}

const initialState = {
  station: undefined, 
  playing: false
}
export function mediaPlayerReducer(state: State = initialState, action: Action ): State {
  switch (action.type) {
    case "@media/start":
      return {
        station: action.payload,
        playing: true
    }
    case "@media/stop":
      return {
        station: undefined,
        playing: false
      }
    case "@media/playing":
      return {
        station: state.station,
        playing: true
      }
    case "@media/pause":
      return {
        station: state.station,
        playing: false
      }
    case "@media/toggle":
      if(state.playing) {
        return {
          station: state.station,
          playing: false
        }
      } 
      else {
        return {
          station: state.station,
          playing: true
        }
      }
    default :
      return state 
  }
}
