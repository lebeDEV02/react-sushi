import {combineReducers} from 'redux';

import filterReducer from "./filters";
import sushiReducer from "./sushi";

const rootReducer = combineReducers({
	filters: filterReducer,
	sushi: sushiReducer,
});

export default rootReducer;