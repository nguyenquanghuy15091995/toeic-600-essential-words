import * as actionTypes from './actionTypes';

export const toggleExPanelByClass = (classifyValue) => (dispatch) => {
  dispatch({
    type: actionTypes.TOGGLE_EXPANEL_BY_CLASS,
    payload: classifyValue,
  })
};
