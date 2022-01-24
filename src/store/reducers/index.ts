import { combineReducers } from "redux"
import { colorSchemaReducer } from "./colorSchema"
import { mediaPlayerReducer } from "./mediaPlayer"
export type { State as MediaPlayerState } from './mediaPlayer'

export const reducers = combineReducers({
  colorSchema: colorSchemaReducer,
  mediaPlayer: mediaPlayerReducer
})

