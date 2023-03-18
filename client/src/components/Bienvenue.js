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
  const [firstParagraph, setFirst] = useState("");
  const [secondParagraph, setSecond] = useState("");
  const [thirdParagraph, setThird] = useState("");
  const [fourthParagraph, setFourth] = useState("");
  const [fifthParagraph, setFifth] = useState("");
  const [sixthParagraph, setSixth] = useState("");

  async function typing(textString, paragraphNumber, changeStateFunction) {
    function sleep(time){
      return new Promise(r => setTimeout (r, time));
    };

    let i;
    let recomposeMessage = "";
    const decomposeMessage = textString.split("");

    for (i = 0; i < decomposeMessage.length; i++) {
      recomposeMessage += decomposeMessage[i];
      await sleep(50);
      changeStateFunction(recomposeMessage);
    };

    if (i === textString.length) {
      setSwitch(paragraphNumber + 1);
    };
  };

    useEffect(() => {
    typing(firstParagraphe, 1, setFirst);
  }, []);

  const handleSecond = (event) => {
    event.preventDefault();
    typing(secondParagraphe, 2, setSecond);
    setSwitch(null);
  };

  const handleThird = (event) => {
    event.preventDefault();
    typing(thirdParagraphe, 3, setThird);
    setSwitch(null);
  };
  const handleFourth = (event) => {
    event.preventDefault();
    typing(fourthParagraphe, 4, setFourth);
    setSwitch(null);
  };
  const handleFifth = (event) => {
    event.preventDefault();
    typing(fifthParagraphe, 5, setFifth);
    setSwitch(null);
  };
  const handleSixth = (event) => {
    event.preventDefault();
    typing(sixthParagraphe, 6, setSixth);
    setSwitch(null);
  };

  return(
    <div> 
      <p className="paragraph">
        {firstParagraph}
      </p>
      {switchParagraph === 2
        ? <Continuer handleClick={handleSecond}/>
        : null}
      <p className="paragraph">
        {secondParagraph}
      </p>
      {switchParagraph === 3
        ? <Continuer handleClick={handleThird}/>
        : null}
      <p className="paragraph">
        {thirdParagraph}
      </p>
      {switchParagraph === 4
        ? <Continuer handleClick={handleFourth}/>
        : null}
      <p className="paragraph">
        {fourthParagraph}
      </p>
      {switchParagraph === 5
        ? <Continuer handleClick={handleFifth}/>
        : null}
      <p className="paragraph">
        {fifthParagraph}
      </p>
      {switchParagraph === 6
        ? <Continuer handleClick={handleSixth}/>
        : null}
      <p className="paragraph">
        {sixthParagraph}
      </p>
      {switchParagraph === 7
        ? <h3>Bienvenue au labyrinthe des folies du Cybernaute!</h3>
        : null}
    </div>
  );
};

export default Bienvenue;
