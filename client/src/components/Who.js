import { useState } from 'react';
import { zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight } from '../text/who';
import Paragraph from './Paragraph.js';

function Who({ onClick }) {
  const [next, setNext] = useState({ 0: true });

  function handleNext(event, number) {
    event.preventDefault();
    setNext({ ...next, [number]: true });
    event.target.className = "hidden";
  };


  return (
    <div>
      <Paragraph paragraph={ zero } handleClick={ (event) => handleNext(event, 1) } />
    { next[1]
      ? <Paragraph paragraph={ one } handleClick={ (event) => handleNext(event, 2) } />
      : null } 
    { next[2]
      ? <Paragraph paragraph={ two } handleClick={ (event) => handleNext(event, 3) }
        form={{ placeholder: 'Quel est votre prénom ?' }} next='textForm' />
      : null
    }
    { next[3]
      ? <Paragraph paragraph={ three } handleClick={ (event) => handleNext(event, 4) }
        form={{ placeholder: 'Quel est votre attribut ?' }} next='textForm' />
      : null
    }
    { next[4]
      ? <Paragraph paragraph={ four } handleClick={ (event) => handleNext(event, 5) } />
      : null
    }
    { next[5]
      ? <Paragraph paragraph={ five } handleClick={ (event) => handleNext(event, 6) } />
      : null
    }
    { next[6]
      ? <Paragraph paragraph={ six } handleClick={ (event) => handleNext(event, 7) } />
      : null
    }
    { next[7]
      ? <Paragraph paragraph={ seven } handleClick={ (event) => handleNext(event, 8) } />
      : null
    }
    { next[8]
      ? <Paragraph paragraph={ eight } handleClick={ onClick }
        form={{ placeholder: 'Quel êtes-vous ?' }} next='textForm' />
      : null
    }
  </div>
  )
};

export default Who;
