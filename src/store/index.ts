import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { reducers } from './reducers';
export { colorSchemaAction } from './actions';

export const store = createStore(reducers, composeWithDevTools());

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch

export const colorSchemaSelector = (state: StoreState) => state.colorSchema

