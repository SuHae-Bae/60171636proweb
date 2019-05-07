import { combineReducers } from 'redux';
import DustReducer from './dust_reducers';


const rootReducer = combineReducers({
  dust: DustReducer,
});

export default rootReducer;