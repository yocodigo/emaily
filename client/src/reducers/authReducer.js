import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false; // Using Falsy rule here in case response returns an empty string instead of an object
        default:
            return state;
    }
}