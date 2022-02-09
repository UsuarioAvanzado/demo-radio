export interface State {
  show: boolean,
  message: string | undefined
}

export interface Action {
  type: string,
  payload: string | undefined
}

const initialState: State = {
  show: false,
  message: "initial state"
}

export function reducer(state: State = initialState, action: Action) : State {
  switch(action.type){
    case "@notification/show":
      return {
       show: true,
       message: action.payload
    }
    case '@notification/hidden':
      return {
       show: false,
       message: undefined
    }
    default:
      return {
      show: false,
      message: undefined
    }
  }
}
