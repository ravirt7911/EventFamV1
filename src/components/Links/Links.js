import React from 'react';
import './Links.css';

function Links() {
  return (
    <div className='links'>
      <div className='heading'>Links</div>
      <button className='link-button' onClick={() => window.open('https://photos.app.goo.gl/UAwBuYMoMqqkHLoS6', '_blank')}>Photo Album</button>
      <button className='link-button' onClick={() => window.open('https://youtu.be/IpTpDVa2Rv0', '_blank')}>Video</button>
      <button className='link-button' onClick={() => window.open('https://www.youtube.com/shorts/F3ZpeZPGMD8', '_blank')}>Shorts</button>
    </div>
  );
}

export default Links;
