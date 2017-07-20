import React from 'react';

var ImgGenerator = (setRandomImage) => {
  
  if (setRandomImage[0]) {
    return (
      <div>
        <img src={setRandomImage.urls.small}/>
      </div>
    )  
  } else {
    return <div> loading..</div>
  }
  
}

export default ImgGenerator;