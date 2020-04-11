export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

function showModal(payload){
  return {
    type: SHOW_MODAL,
    visible: payload.visible
  }
}

function hideModal(payload){
  return {
    type: HIDE_MODAL,
    visible: payload
  }
}
