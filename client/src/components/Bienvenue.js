import { useState } from 'react';
import { firstParagraphe,
  secondParagraphe,
  thirdParagraphe,
  fourthParagraphe,
  fifthParagraphe,
  sixthParagraphe } from '../text/bienvenue.js';
import Paragraph from './Paragraph.js';

function Bienvenue({ onClick }) {
  const [next, setNext] = useState({ 0: true });

  function handleClick(event, number) {
    setNext({ ...next, [number]: true });
    event.target.className = "hidden";
  };

  return (
    <div>
      <Paragraph paragraph={ firstParagraphe } handleClick={(event) => handleClick(event, 1)} />
      { next[1]
        ? <Paragraph paragraph={ secondParagraphe } handleClick={(event) => handleClick(event, 2)} />
        : null }
      { next[2]
        ? <Paragraph paragraph={ thirdParagraphe } handleClick={(event) => handleClick(event, 3)} />
        : null }
      { next[3]
        ? <Paragraph paragraph={ fourthParagraphe } handleClick={(event) => handleClick(event, 4)} />
        : null }
      { next[4]
        ? <Paragraph paragraph={ fifthParagraphe } handleClick={(event) => handleClick(event, 5)} />
        : null }
      { next[5]
        ? <Paragraph paragraph={ sixthParagraphe } handleClick={(event) => handleClick(event, 6)} />
        : null }
      { next[6]
         ? (
             <div>
               <h3>Bienvenue au labyrinthe des folies du Cybernaute!</h3>
               <button onClick={ onClick }>Continuer</button>
             </div>
         )
         : null }
     </div>
  )
};

export default Bienvenue;
