import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import image from './image';
import setRandomImage from './setRandomImage';

export default combineReducers({
  image,
  setRandomImage,
  routing: routerReducer
})