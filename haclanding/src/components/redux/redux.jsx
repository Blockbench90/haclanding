import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import commentsReducer from "./comments-reducer";

let reducers = combineReducers({
    commentsPage: commentsReducer,
    form: formReducer
})
let store = createStore(reducers);

window.store = store;


export default store;
