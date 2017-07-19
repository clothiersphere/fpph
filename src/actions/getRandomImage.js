import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function randomImageSet(images) {
  return {
    type: actionTypes.RANDOMIMAGE_SET,
    images
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
