import { combineReducers } from 'redux';

import appReducer from './containers/App/reducer';
import lessonListReducer from './containers/App/LessonList/reducer';

export default combineReducers({
  // Other reducers go here
  appInfo: appReducer,
  lessonListInfo: lessonListReducer,
});
