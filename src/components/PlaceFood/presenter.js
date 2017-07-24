import React from 'react';
import ImgGenerator from './ImgGenerator';

function PlaceFood({images = [], setRandomImage, getRandomImage }) {
  
  console.log(setRandomImage, "setRandomImage")

  function prevDefault(e) {
    alert('itwork')
    e.preventDefault();
  }

  function header() {
    return   (
      <div className="header">
      <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'className="leftSaltBae"/>
      <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'/>
      <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'/>
      <img src={require(`../../../dist/img/placeholder.jpg`)} height='25%' width='25%'className="rightSaltBae"/>
    </div>
    )
  }
  // {header()}

  return (
    <div className="mainContainer">
      <div className="splash">
        <div className="row">
          <h1 className="siteName">food porn placeholder generator</h1>
          <h2> make it tasty </h2>
        </div>
        <div className="row">
          <form> 
            <input type="text" name="textBox" className="textBox" value={`/api/getRandomImage/200`} readOnly />
          </form>
        </div>
        <div className="row">
          <h2> make it fruity </h2>
          <form> 
            <input type="text" name="textBox" className="textBox" value={`/api/getRandomImage/200/300`} readOnly />
          </form>
        </div>
         <div className="row">
          <h2> make it sweet </h2>
          <form> 
            <input type="text" name="textBox" className="textBox" value={`/api/getRandomImage/200/300`} readOnly />
          </form>
        </div>
      </div>
      <div className="mainBody">
        <div className="linkBox">
          <img src={`https://unsplash.it/200/?random`} />
          <form> 
            <input type="text" name="textBox" className="textBox" value={`/api/getRandomImage/200`} readOnly />
          </form> 
          <img src={`https://unsplash.it/300/?random`} />
          <form> 
            <input type="text" name="textBox2" className="textBox" value={`/api/getRandomImage/200/300`} readOnly />
          </form> 
        </div>
        <div className="largePicture">
          <ImgGenerator setRandomImage={setRandomImage} />
          <button type="button" onClick={getRandomImage}>Generate Random FoodPorn Placeholder
          </button>
        </div>
    </div>
  </div>
  )
}

export default PlaceFood;


// {images.map((image, key) => {
//   return  <div key={key}> 
//     <img src={image.image} />
//     <form> 
//       <input type="text" name="textBox" className="textBox" value={image.image} readOnly />
//     </form> 
//   </div>
// })}

// <img src={`/api/getRandomImage/200`} />
// <form> 
//  <input type="text" name="textBox" className="textBox" value={`/api/getRandomImage/200`} readOnly />
// </form> 
// <img src={`/api/getRandomImage/200/300`} />
// <form> 
//  <input type="text" name="textBox2" className="textBox" value={`/api/getRandomImage/200/300`} readOnly />
// </form> 