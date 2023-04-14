function Main({ onClick }) {
  return (
    <div>
      <h1>Le Cybernaute</h1>
        <h2>{"Nul n'entre ici s'il n'est philosophe"}</h2>
        <div className="options">
          <button type="button" onClick={ () => onClick("intro") }>Intro</button>
          <button type="button" onClick={ () => onClick("who") }>Qui suis-je?</button>
          <button type="button" onClick={ () => onClick("escape") }>Escape</button>
          <button type="button" onClick={ () => onClick("water") }>Water</button>
          <button type="button" onClick={ () => onClick("tarot") }>Tarot</button>
        </div>
    </div>
  );
};

export default Main;
