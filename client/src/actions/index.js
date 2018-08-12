import axios from "axios";
import { FETCH_USER } from "./types";

// Redux Thunk inspects value returned from fetchUser action creator
export const fetchUser = () => { // Action creator called
  return function(dispatch) { // Redux sees that function is being returned and will automatically call it with dispatch
    axios
      .get("/api/current_user") // Request is then made
      .then(res => dispatch({ type: FETCH_USER, payload: res })); // Once we get a response, only then is action dispatched
  };
};
