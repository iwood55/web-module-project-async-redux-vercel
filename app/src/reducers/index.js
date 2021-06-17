import {combineReducers} from 'redux';
import Dog from './dogReducer';

const rootReducer = combineReducers({
  dog: Dog
});

export default rootReducer;