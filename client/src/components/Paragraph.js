import { useState, useEffect } from 'react';

function Paragraph({ paragraph, handleClick, form='', next='button' }) {
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
      await sleep(50);
      setTyped(recomposeMessage);
    };
  };

  useEffect(() => {
    typing(paragraph)
  }, [paragraph]);

  const textForm = (
    <form className="text-form" onSubmit={ handleClick }>
      <input type="text" value = { form.value } onChange={ form.change }
       placeholder={form.placeholder} required />
      <input type="submit" value="Continuer" />
    </form>
  );

  return (
    <div>
      <p>
        { typed }
      </p>
      { typed.length === paragraph.length
        ? next === 'button'
          ? <button onClick={ handleClick }>Continuer</button>
          : next === 'textForm'
          ? textForm
          : null
        : null }
    </div>
)
};

export default Paragraph;
