import actions from "./actions"

const initialState = {
  locale: 'en_US',
  dict: {}
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_LOCALE: {
      return {
        ...state,
        dict: action.payload
      }
    }
    default:
      return state
  }
}