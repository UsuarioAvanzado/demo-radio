import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { reducers } from './reducers';


export const store = createStore(reducers, composeWithDevTools());


export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch


export type { MediaPlayerState } from './reducers'

const colorSchema = (state: StoreState) => state.colorSchema.theme
const mediaPlayer = (state: StoreState) => state.mediaPlayer
const notification = (state: StoreState) => state.notification
export const selectors = {
 colorSchema: colorSchema,
 mediaPlayer: mediaPlayer,
 notification: notification
}
