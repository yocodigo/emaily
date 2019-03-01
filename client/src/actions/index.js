import axios from 'axios';
import { FETCH_USER } from './types';

// Redux Thunk inspects value returned from fetchUser action creator
// export const fetchUser = () => { // Action creator called
//     return function(dispatch) { // Redux sees that function is being returned and will automatically call it with dispatch
//         axios.get('/api/current_user') // Request is then made
//             .then(res => dispatchEvent({ type: FETCH_USER, payload: res })); // Once we get a response, only then is action dispatched
//     };
// };

// REFACTORED from ^^^
export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user"); // Request is then made
    
    dispatch({ type: FETCH_USER, payload: res.data }); // Once we get a response, only then is action dispatched
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
};