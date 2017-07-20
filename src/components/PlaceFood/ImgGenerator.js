import React from 'react';

function ImgGenerator({setRandomImage = {}}) {
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
    return <div> loading..</div>
  }
  
}

export default ImgGenerator;