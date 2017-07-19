import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

function randomImageSet(image) {
  return {
    type: actionTypes.RANDOMIMAGE_SET,
    image
  };
};

export function getRandomImage() {
  return function(dispatch) {
    const request = axios({
      method: 'GET',
      url: 'http://localhost:8080/api/getRandomImage'
    });
    return request
    .then((response) => {
      dispatch(randomImageSet(response.data))
    })
  };
};
