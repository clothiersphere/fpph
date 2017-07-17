import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PlaceFood from './presenter';

function mapStateToProps(state) {
  const images = state.image;
  return {
    images
  };
}


function mapDispatchToProps(dispatch) {
  return {
    requestImg: bindActionCreators(actions.setImages, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceFood);
