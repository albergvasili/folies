import { useState } from 'react';
import { zero,
  one,
  two,
  three,
  four,
  five,
  six } from '../text/bienvenue.js';
import Paragraph from './Paragraph.js';

function Bienvenue({ onClick }) {
  const [next, setNext] = useState({ 0: true });

  function handleClick(event, number) {
    setNext({ ...next, [number]: true });
    event.target.className = "hidden";
  };

  return (
    <div>
      <Paragraph paragraph={ zero } handleClick={(event) => handleClick(event, 1)} />
      { next[1]
        ? <Paragraph paragraph={ one } handleClick={(event) => handleClick(event, 2)} />
        : null }
      { next[2]
        ? <Paragraph paragraph={ two } handleClick={(event) => handleClick(event, 3)} />
        : null }
      { next[3]
        ? <Paragraph paragraph={ three } handleClick={(event) => handleClick(event, 4)} />
        : null }
      { next[4]
        ? <Paragraph paragraph={ four } handleClick={(event) => handleClick(event, 5)} />
        : null }
      { next[5]
        ? <Paragraph paragraph={ five } handleClick={(event) => handleClick(event, 6)} />
        : null }
      { next[6]
         ? (
             <div>
               <h2>{ six }</h2>
               <button onClick={ onClick }>Continuer</button>
             </div>
         )
         : null }
     </div>
  )
};

export default Bienvenue;
