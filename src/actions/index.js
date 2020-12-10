import { CYCLE_WORD, DELETE_CHAR } from "../constants";

export const cycleWords = () => {
  return {
    type: CYCLE_WORD,
  };
};

export const deleteChar = () => {
  return {
    type: DELETE_CHAR,
  };
};
