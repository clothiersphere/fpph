import React from 'react';
import ImgGenerator from './ImgGenerator';

var PlaceFood = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'className="leftSaltBae"/>
        <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'/>
        <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'/>
        <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'className="rightSaltBae"/>
      </div>
      <div className="mainBody">
        
        <div className="linkBox">
        <img src='https://unsplash.it/200'/>
          <div className="firstBox">
            <form>
              <input type="text" name="textBox" className="textBox" value="https://fpph.com/200"/>
             
            </form>
          </div>
          <br/>
          <div className="secondBox">
            <form>
              <input type="text" name="textBox" className="textBox"value="https://fpph.com/200/300"/>
             
            </form>
          </div>
        </div>
        <div className="largePicture">
          <ImgGenerator />
          <form>
            <input type="text" name="textBox" className="textBox2"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
    </div>
  </div>
  )
}

export default PlaceFood;