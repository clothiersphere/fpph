import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PlaceFood from './presenter';

function mapStateToProps(state) {

  console.log(state, "STATE")
  const images = state.image;
  const setRandomImage = state.setRandomImage;

  return {
    images,
    setRandomImage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestImg: bindActionCreators(actions.getRandomImage, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceFood);
