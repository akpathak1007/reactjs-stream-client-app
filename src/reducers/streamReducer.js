import {
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
} from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS: {
      let response = action.payload; //array of objects
      let newState = {};
      response.forEach((element) => newState[element.id] = element);
      return {...state, ...newState};
    }
    case FETCH_STREAM: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case CREATE_STREAM: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case EDIT_STREAM: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case DELETE_STREAM: {
      let newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    default: {
      return state;
    }
  }
};
