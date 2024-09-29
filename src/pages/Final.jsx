import React, { useState } from 'react';
import './Final.css'

function Final() {
  const [showImage, setShowImage] = useState(true);
  const [animateImage, setAnimateImage] = useState(false);
  const [showNewImage, setShowNewImage] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const handleClick = () => {
    setAnimateImage(true);
    setTimeout(() => {
      setShowImage(false);
      setShowNewImage(true);
      setShowHeader(false);
    }, 2000);
  };

  return (
    <div className="final-page">
      <div className="container">
        {showHeader && (
          <div className={`image-header-container ${animateImage ? 'image-header-animate' : ''}`} onClick={handleClick}>
            <header>
              <h1>Click Me To Proceeedddddd</h1>
            </header>
            <div className="bg-image" />
          </div>
        )}
        {showImage ? (
          <div className="hidden" />
        ) : (
          <>  
          {showNewImage && (
            <div
              className="new-image"
            />
          )}
            <header>
              <h1>I LOVE YOU❤️<br />
              WILL YOU BE MINE FOREVER PRINCESSSS??</h1>
            </header>
            <div className="button-container">
              <a href="/last">
                <button id="btn1">YESSSSS</button>
              </a>
              <button id="btn2">NO</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Final;