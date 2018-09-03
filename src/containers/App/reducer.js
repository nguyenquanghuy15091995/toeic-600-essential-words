import * as data from './appData';
import { mixDataToLessonList } from '../../commons/Functions';

const contractData = require('../../assets/contracts.json');

const initState = {
  lessons: mixDataToLessonList([contractData], data.lessons),
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
