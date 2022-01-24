export interface Action {
  type: string
}
export interface State {
  theme: string
}
const initialState: State = {
  theme: 'color-schema--light'
}
export function colorSchemaReducer(state: State = initialState , action: Action): State {
  switch (action.type) {
    case '@color-schema/toggle':
      if ( state.theme == 'color-schema--light' ) {
        return {
          theme: 'color-schema--dark'
        }
      } 
      if ( state.theme == 'color-schema--dark' ){
        return { theme: 'color-schema--light' }
      }
    default:
      return state
  }
}

