import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RANDOMIMAGE_SET:
      return setRandomImage(state, action);
  }
  return state;
}

function setRandomImage(state, action) {
  const { images } = action;
  return {...state, ...images};
}