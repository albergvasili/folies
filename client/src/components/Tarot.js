function Tarot() {
  return (
    <h1>Le Tarot</h1>
    <p>
      Voici le texte du Tarot mystique.
      C'est un miroir de l'esprit.
    </p>
    <img src="" alt="image du tarot" />
    <form>
      <input type="number" min="0" max="21" />
      <button onClick={() => console.log("click")}>Allons-y!</button>
    </form>
    <p>Le tarot ne prédit pas le futur. Pour dévoiler les secrets de votre destin, regardez plus bas</p>

    <form>
      <p>Pour découvrir votre avenir cliquez <button>ICI</button></p>
    </form>
  )
};

export default Tarot;
