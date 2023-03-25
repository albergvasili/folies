import './style.css';
import { useState } from 'react';

function Escape() {
  const [mouse, setMouse] = useState({ x:0, y:0 });
  const handleMouse = (event) => {
    setMouse({ x: event.pageX, y: event.pageY });
  };

  const handleOver = (event) => {
    const randomX = Math.random() * visualViewport.width;
    const randomY = Math.random() * visualViewport.height;
    const newPosition = `position:absolute; top:${randomY}px; left:${randomX}px;`;
    event.target.setAttribute('style', newPosition);
    console.log(visualViewport.height);
  };

  return (
    <div onMouseMove={handleMouse}>
      <p>Mouse: x:{ mouse.x } y:{ mouse.y }</p>
      <p>Escape</p>
      <img onMouseOver={ handleOver } className="moving" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/We_are_our_mountains.jpg" alt="We are our mountains sculpture" />
    </div>
  );
};

export default Escape;
