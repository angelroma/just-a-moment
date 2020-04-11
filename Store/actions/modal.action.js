export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (payload) => {
  return {
    type: SHOW_MODAL,
    visible: payload.visible,
  };
};

export const hideModal = (payload) => {
  return {
    type: HIDE_MODAL,
    visible: payload,
  };
};
