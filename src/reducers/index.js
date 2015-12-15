import * as redux from 'redux';
import todo from './todo-reducer'

const reducers = redux.combineReducers({
  todo
});


export default reducers;
