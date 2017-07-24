import React from 'react';

function ImgGenerator({setRandomImage = {}}) {
  
  const dummy = 'https://unsplash.it/200/300/?random';

  if (setRandomImage.urls) {
    return (
      <div>
        <img src={setRandomImage.urls.small}/>
        <form> 
          <input type="text" name="textBox" className="textBox" value={setRandomImage.links.html} readOnly />
        </form> 
      </div>
    )  
  } else {
    return (
      <div> 
        <img src={dummy}/>
        <form> 
          <input type="text" name="textBox" className="textBox" value={dummy} readOnly />
        </form> 
      </div>
    )
  }
}

export default ImgGenerator;