import { CYCLE_WORD, DELETE_CHAR } from "../constants";

const initialState = {
  inputValue: [],
  data:[],
  isFetching: false
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CYCLE_WORD:
      return CYCLE_WORD;
    case DELETE_CHAR:
      return DELETE_CHAR;
    default:
      return state;
  }
};

export default wordReducer;
