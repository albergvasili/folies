import './App.css';
import {useState, useEffect} from 'react';

function Bienvenue() {
  const firstParagraphe = `
    Un site web.    
    Pour quoi faire?   
    Le monde virtuel des cybernautes est plein de sites utiles et complets.   
    Ils ont tous quelque chose à dire, 
    ces cybernautes avec leurs sites web utiles, 
    ils ont tous quelque chose à vendre.   
    Leurs liens nous amènent quelque part, 
    et le risque de s'égarer est infime.   
       `;
  const secondParagraphe = `
    Le Cybernaute se demande: 
    qu'aurais-je à contribuer dans cet amas de sites simples et utiles?   
    Je ne suis pas l'ennemi de l'utile, 
    et surtout pas l'ennemi du simple.   
    Mais que pourrais-je faire dans cet océan pragmatique de courants électriques, 
    numériques et virtuels?   
    Que pourrais-je faire de *bon*, 
    si le reste des créations cybernautiques, 
    le reste des websites sont déjà, 
    pour la plupart, 
    utiles, 
    simples, 
    et complets?   
    Pas besoin d'ajouter de l'eau à l'océan plein d'hydroxyde d'hydrogène.   
        `;
  const thirdParagraphe = `
    Il n'y a là rien de spécial. 

    Mais je ne cherche pas à être spécial,  congosà!   

    Je veux tout simplement éviter de tomber dans la cataracte! 
    Catastrophe! 
    Catastérisme! 
    Pardon.   

    Je reprends: 
    L'eau qui se jette dans l'eau.   

    Inutile redondance de cyberespaces (utiles et simples).   

    Ce n'est pas pour gagner de l'argent que je songe à créer un site web, 
    cela est clair.   

    Sinon je dirais bien: 
    que l'eau appelle l'eau, 
    et que l'argent appelle l'argent.   
        `;
  const fourthParagraphe = `
    J'ai plongé aujourd'hui dans les eaux de la virtualité pour créer quelque chose digne d'être apprécié.   

    Je veux que mon site web soit *estiminda*.   

    L'utilité ne figure donc pas dans l'horizon d'attente.   

    Et la simplicité?   

    Peut-être, 
    parfois, 
    pourquoi pas?   

    Le but?   

    Il me semble que concevoir un but est possible, 
    mais l'essence de ce but est un mystère dans les profondeurs des eaux qui nous submergent.   
        `;
  const fifthParagraphe = `
    Remarquons que j'ai certainement quelque chose à dire, 
    puisque je dis des choses, 
    que je n'ai absolument pas le désir de promouvoir un service pour quelque profit, 
    et que la route que je tente d'établir dans les eaux trompeuses de mon imagination n'a 
    ni de destination précise dans ses hyperliens, 
    ni l'intention de ne pas chercher à s'égarer.   

    C'est à dire, 
    que nous nageons ici dans des eaux étranges, 
    et le site que voici est véritablement à rebours.   
        `;
  const sixthParagraphe =  `
    Le séjour en cet espace cybérien surréaliste est inutile, 
    incomplet, 
    et bizarre.   
    Bienvenue au labyrinthe des folies du Cybernaute!
        `;

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
  }, [firstParagraphe]);

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
  return (
    <div className="App">
      <p className="paragraph">
        {firstParagraph}
      </p>
      {switchParagraph === 2
      ? <Continuer handleClick={handleSecond}/>
     : null}
      <p className="paragraph">
        {secondParagraph}
      </p>{switchParagraph === 3
      ? <Continuer handleClick={handleThird}/>
     : null}
      <p className="paragraph">
        {thirdParagraph}
      </p>{switchParagraph === 4
      ? <Continuer handleClick={handleFourth}/>
     : null}
      <p className="paragraph">
        {fourthParagraph}
      </p>{switchParagraph === 5
      ? <Continuer handleClick={handleFifth}/>
     : null}
      <p className="paragraph">
        {fifthParagraph}
      </p>{switchParagraph === 6
      ? <Continuer handleClick={handleSixth}/>
     : null}
      <p className="paragraph">
        {sixthParagraph}
      </p>
    </div>
  );
}

function Continuer({handleClick}) {
  return (
    <button onClick={handleClick}>Continuer</button>
  );
};

function App() {
  return (
    <div className="App">
      <Bienvenue />
    </div>
  );
};

export default App;
