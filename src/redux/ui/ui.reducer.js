import * as uiActions from "./ui.action"

const INITIAL_STATE = {
  isShow: false
}

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiActions.OPEN_ADD_MODAL: {
      return {
        ...state,
        isShow: true
      }
    }
    case uiActions.CLOSE_ADD_MODAL: {
      return {
        ...state,
        isShow: false
      }
    }
    default:
      return state
  }
}

export default uiReducer
