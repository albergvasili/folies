import { useState, useEffect } from 'react';

function Paragraph({ paragraph, handleClick }) {
  const [typed, setTyped] = useState('');

  async function typing(textString) {
    function sleep(time){
      return new Promise(r => setTimeout (r, time));
    };

    let i;
    let recomposeMessage = '';
    const decomposeMessage = textString.split('');

    for (i = 0; i < decomposeMessage.length; i++) {
      recomposeMessage += decomposeMessage[i];
      await sleep(1);
      setTyped(recomposeMessage);
    };
  };

  useEffect(() => {
    typing(paragraph)
  }, []);

  return (
    <div>
      <p>
        { typed }
      </p>
      { typed.length === paragraph.length
        ? <button onClick={ handleClick }>Continuer</button>
        : null }
    </div>
)
};

export default Paragraph;
