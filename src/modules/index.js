import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//combineReducers 는 리듀서가 여러개라서리듀서를 하나로 합쳐주는 기능을 제공하는 함수
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
