import { combineReducers } from 'redux';
import { AuthReducer } from './Reducers/AuthReducer';


// Combine individual reducers into a root reducer
const rootReducer = combineReducers({
    Auth: AuthReducer,
    // Add more reducers as needed
});

export default rootReducer;
