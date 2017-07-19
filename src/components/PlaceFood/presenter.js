import React from 'react';
import ImgGenerator from './ImgGenerator';

function PlaceFood({images = [], requestImg }) {
  
  function prevDefault(e) {
    alert('itwork')
    e.preventDefault();
  }

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
        {images.map((image, key) => {
          return  <div key={key}> 
            <img src={image.image} />
            <form> 
              <input type="text" name="textBox" className="textBox" value={image.image} readOnly />
            </form> 
          </div>
        })}
        </div>
        <div className="largePicture">
          <ImgGenerator images={images} />
          <button type="button" onClick={requestImg}>Make me Hungry
          </button>
        </div>
    </div>
  </div>
  )
}

export default PlaceFood;