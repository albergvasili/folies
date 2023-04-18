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
  const [identity, setIdentity] = useState({ name: '', attribute: '', newName: '' });

  function handleNext(event, number) {
    event.preventDefault();
    setNext({ ...next, [number]: true });
    event.target.className = "hidden";
  };

  function addFirstName(name) {
    setIdentity({ ...identity, name });
  };

  function addAttribute(attribute) {
    setIdentity({ ...identity, attribute });
  };

  function addNewName(newName) {
    setIdentity({ ...identity, newName });
  };

  const firstNameForm = { placeholder: 'Quel est votre prénom ?',
                change: (event) => addFirstName(event.target.value),
                value: identity.name };
  const attributeForm = { placeholder: 'Quel est votre attribut ?',
                change: (event) => addAttribute(event.target.value),
                value: identity.attribute };
  const newNameForm = { placeholder: 'Qui êtes-vous ?',
                change: (event) => addNewName(event.target.value),
                value: identity.newName }

  return (
    <div>
      <Paragraph paragraph={ zero } handleClick={ (event) => handleNext(event, 1) } />
    { next[1]
      ? <Paragraph paragraph={ one } handleClick={ (event) => handleNext(event, 2) } />
      : null } 
    { next[2]
      ? <Paragraph paragraph={ two } handleClick={ (event) => handleNext(event, 3) }
         form={ firstNameForm } next='textForm' />
      : null
    }
    { next[3]
      ? <Paragraph paragraph={ three(identity.name) } handleClick={ (event) => handleNext(event, 4) } />
      : null
    }
    { next[4]
      ? <div>
          <Paragraph paragraph={ four } handleClick={ (event) => handleNext(event, 5) }
           form={ attributeForm } next='textForm' />
          <p>{identity.name} {identity.attribute}</p>
        </div>
      : null
    }
    { next[5]
      ? <Paragraph paragraph={ five(identity.name, identity.attribute) } handleClick={ (event) => handleNext(event, 6) } />
      : null
    }
    { next[6]
      ? <Paragraph paragraph={ six } handleClick={ (event) => handleNext(event, 7) } />
      : null
    }
    { next[7]
      ? <Paragraph paragraph={ seven(identity.name, identity.attribute) } handleClick={ (event) => handleNext(event, 8) } />
      : null
    }
    { next[8]
      ? <div>
          <Paragraph paragraph={ eight } handleClick={ (event) => handleNext(event, 9) }
           form={ newNameForm } next='textForm' />
          <p>{identity.name} {identity.attribute}, également connu sous le nom de {identity.newName}</p>
        </div>
      : null
    }
    { next[9]
      ?  <iframe width="560" height="315"
          src="https://www.youtube.com/embed/hSAmcedkOXo?controls=0&autoplay=1"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      : null
    }
  </div>
  )
};

export default Who;
