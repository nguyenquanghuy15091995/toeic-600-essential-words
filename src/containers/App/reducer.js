import * as data from './appData';
import { mixDataToLessonList } from '../../commons/Functions';

const contractData = require('../../assets/contracts.json');
const marketingData = require('../../assets/marketing.json');

const initState = {
  lessons: mixDataToLessonList(
    [
      contractData,
      marketingData
    ], 
    data.lessons
  ),
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
