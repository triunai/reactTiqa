import reactImage from './assets/etiqa.svg'

function Header(){
  return (
      <header>
        <img src={reactImage}
        alt="Stylized atom" />
        <h1>E T I Q A N </h1>
        <p>
          What does it mean to be an <span className="etiqanWriting">ETIQAN?</span>  🤔💭
        </p>
      </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Lets find out !</h2>
      </main>
    </div>
  );
}

export default App;
