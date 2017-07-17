import React from 'react';
import ImgGenerator from './ImgGenerator';

var PlaceFood = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'/>
        <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'/>
        <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'/>
        <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'/>
      </div>
      <div className="linkBox">
        &nbsp
      </div>
      <div className="largePicture">
        <ImgGenerator />
           <form>
          <input type="text" name="https://fpph/200"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default PlaceFood;