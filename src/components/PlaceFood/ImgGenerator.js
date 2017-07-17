import React from 'react';

var ImgGenerator = () => {

  var handleClick = () => {
    alert('Hi')
  }

  return (
    <div>
      <img src="https://unsplash.it/200/300"/>
      <button type="button" onClick={handleClick}>Make me Hungry
      </button>
    </div>
  )
}

export default ImgGenerator;