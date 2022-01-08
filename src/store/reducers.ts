import { combineReducers } from "redux"


interface Action  {
  type: string
}

function colorSchemaReducer(state: string = 'light', action: Action) {
  switch (action.type) {
    case '@toggle':
      if ( state == 'light' ) {
        return 'dark'
      } 
      if ( state == 'dark' ){
        return 'light'
      }
    default:
      return state
  }
}

export const reducers = combineReducers({
  colorSchema: colorSchemaReducer
})

