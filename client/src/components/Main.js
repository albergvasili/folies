function Main({onClick}) {
  return (
    <div>
      <h1>Le Cybernaute</h1>
        <h2>{"Nul n'entre ici s'il n'est philosophe"}</h2>
        <div>
          <input type="button" onClick={onClick} value="Entrer"/>
        </div>
    </div>
  );
};

export default Main;
