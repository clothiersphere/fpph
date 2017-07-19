import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PlaceFood from './presenter';

function mapStateToProps(state) {

  console.log(state, "STATE")
  const images = state.image;
  const randomImage = state.setRandomImage;

  return {
    images,
    randomImage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestImg: bindActionCreators(actions.getRandomImage, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceFood);
