import * as actionTypes from '../constants/actionTypes';

export function setImages(images) {
  return {
    type: actionTypes.IMAGES_SET,
    images
  };
};
