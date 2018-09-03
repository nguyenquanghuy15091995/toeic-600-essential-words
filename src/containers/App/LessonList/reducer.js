import { initExPanelState } from './constants';
import * as actionTypes from './actionTypes';

const initState = {
  exPanel: initExPanelState(),
};

const lessonListReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_EXPANEL_BY_CLASS:
      const exPanelTemp = { ...state.exPanel };
      exPanelTemp[`${action.payload}`] = !state.exPanel[`${action.payload}`];
      return {
        ...state,
        exPanel: exPanelTemp,
      };
    default:
      return state;
  }
};

export default lessonListReducer;
