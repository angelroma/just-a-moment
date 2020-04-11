import {HIDE_MODAL, SHOW_MODAL} from '../actions/modal.action';

const initialState  = {
  visible: true,
}

const modalReducer = (state = initialState, action) =>{
  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, {visible: action.visible});
    case HIDE_MODAL:
      return Object.assign({}, state, {visible: action.visible})
    default:
      return state
  }
}

export default modalReducer
