import React, { useState } from 'react';
import './Toggle.css'; 

const IToggle = () => {
  const [isImageOne, setIsImageOne] = useState(true);

  const toggleImage = () => {
    setIsImageOne(!isImageOne);
  };

  return (
    <div className="image-container" onClick={toggleImage}>
      <img
        src={isImageOne ? 'https://static.printler.com/cache/0/8/7/0/5/5/0870555a812070b1b1239a74392cae3c9defc289.jpg' : 'https://i.pinimg.com/564x/92/ed/c8/92edc8a04bc8f774db1d62eb6d424bff.jpg'}
        alt={isImageOne ? 'Image 1' : 'Image 2'}
        className="toggle-image"
      />
    </div>
  );
};

export default IToggle;
