import reactImage from './assets/etiqa.svg'
import componentsImg from './assets/components.png'

import { CORE_CONCEPTS } from './data.js';

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

function CoreConcept({image,title,description}){
  return (
  <li>
    <img src={image} alt={title}/>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Lets find out !n</h2>
        <section id='core-concepts'>
          <h2 className='coreCepts'> Core Concepts </h2>
          <ul>
            <CoreConcept 
            {...CORE_CONCEPTS[0]}/>
            <CoreConcept
            {...CORE_CONCEPTS[1]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[2]}/>
            <CoreConcept
            {...CORE_CONCEPTS[3]}/>
            <CoreConcept/>
            <CoreConcept/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
