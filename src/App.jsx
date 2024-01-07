import { useState } from 'react'; 
import componentsImg from './assets/components.png';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { Component } from 'react';

function App() {
  
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a relevant button -useState');

  let tabContent = 'Please click a relevant button';
  
  // initialization of arrays
  const buttonNames = ["Ethical", "Inclusive", "Question", "Authentic", "Trustworthy", "Nurturing"];
  const selectedExample = EXAMPLES[selectedTopic] || {};


  function handleClick(selectedButton){
    // selectedButton => 'tabThatWasClicked'
    
    setSelectedTopic(selectedButton);

    console.log(selectedTopic);
  }

  return (
    <div>
      <Header></Header>
      <main>

        <h2>Lets find out !</h2>
        <h4 style={{textAlign:'center'}}>(reminder to change svgs)</h4>
        
        <section id='core-concepts'>
          <h2 className='coreCepts'> Core Concepts </h2>

          {/* We have 6 ULs here */}
          <ul>
            <CoreConcept 
            {...CORE_CONCEPTS[0]}/>
            <CoreConcept
            {...CORE_CONCEPTS[1]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[2]}/>
            <CoreConcept
            {...CORE_CONCEPTS[3]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[4]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[5]}/>
          </ul>
        </section>

        <section id='descriptions'>
          <h2>Descriptions</h2>
          <menu>  
          {buttonNames.map( name =>
            <TabButton 
              key = {name}
              buttonName = {name}
              onClickOfButton = { () => handleClick(name)}
              />
           )}
              {/*Previous Implementation
                  <TabButton 
                  buttonName="Inclusive"
                  onClickOfButton = {handleClick}/> 
              */
              }
          </menu>
          <div id = 'tab-content'>
              <h3>{selectedExample.title}</h3>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p></p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
