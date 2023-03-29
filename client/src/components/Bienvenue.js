import {useState, useEffect} from 'react';

import {firstParagraphe,
  secondParagraphe,
  thirdParagraphe,
  fourthParagraphe,
  fifthParagraphe,
  sixthParagraphe} from '../text/bienvenue.js';
import Continuer from './Continuer.js';

function Bienvenue() {
  const [switchParagraph, setSwitch] = useState(null);
  const [paragraph, setParagraph] = useState({});

  async function typing(textString, paragraphNumber) {
    function sleep(time){
      return new Promise(r => setTimeout (r, time));
    };

    let i;
    let recomposeMessage = "";
    const decomposeMessage = textString.split("");

    for (i = 0; i < decomposeMessage.length; i++) {
      recomposeMessage += decomposeMessage[i];
      await sleep(50);
      setParagraph({ ...paragraph, [paragraphNumber]: recomposeMessage });
    };

    if (i === textString.length) {
      setSwitch(paragraphNumber + 1);
    };
  };

  useEffect(() => {
    typing(firstParagraphe, 1);
  }, []);

  function handleClick(event, paragraph, paragraphNumber) {
    event.preventDefault();
    typing(paragraph, paragraphNumber);
    setSwitch(null);
  }

  return(
    <div> 
      <p className="paragraph">
        { paragraph[1] }
      </p>
      { switchParagraph === 2
        ? <Continuer handleClick={ (e) => handleClick(e, secondParagraphe, 2) }/>
        : null }
      <p className="paragraph">
        { paragraph[2] } 
      </p>
      { switchParagraph === 3
        ? <Continuer handleClick={ (e) => handleClick(e, thirdParagraphe, 3) }/>
        : null }
      <p className="paragraph">
        { paragraph[3] }
      </p>
      { switchParagraph === 4
        ? <Continuer handleClick={ (e) => handleClick(e, fourthParagraphe, 4) }/>
        : null }
      <p className="paragraph">
        { paragraph[4] }
      </p>
      { switchParagraph === 5
        ? <Continuer handleClick={ (e) => handleClick(e, fifthParagraphe, 5) }/>
        : null }
      <p className="paragraph">
        { paragraph[5] }
      </p>
      { switchParagraph === 6
        ? <Continuer handleClick={ (e) => handleClick(e, sixthParagraphe, 6) }/>
        : null }
      <p className="paragraph">
        { paragraph[6] }
      </p>
      { switchParagraph === 7
        ? <h3>Bienvenue au labyrinthe des folies du Cybernaute!</h3>
        : null }
    </div>
  );
};

export default Bienvenue;
