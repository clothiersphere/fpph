import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IMAGES_SET:
      return setImages(state, action);
  }
  return state;
}

function setImages(state, action) {
  const { images } = action;
  return [...state, ...images ];
}