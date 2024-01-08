// react imports
import { useState } from 'react'; 
import { Component } from 'react';
// component imports
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
// domain model imports
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
  
  // Lifecycle hooks begin here
  const [ selectedTopic, setSelectedTopic ] = useState();

  // initialization of arrays
  const buttonNames = ["Ethical", "Inclusive", "Questing", "Authentic", "Trustworthy", "Nurturing"];

  // function to handle tabButtons
  function handleClick(selectedButton){
    // selectedButton => 'tabThatWasClicked'
    
    setSelectedTopic(selectedButton);

    console.log(selectedTopic);
  }

  // Actual HTML implementation 

  return (
    <div>
      {/* Etiqa Header */}
      <Header></Header>

      <main>

        <h2>Lets find out !</h2>
        <h4 style={{textAlign:'center'}}>(reminder to change svgs)</h4>
        
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
            <CoreConcept 
            {...CORE_CONCEPTS[4]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[5]}/>
          </ul>
        </section>

        <section id='descriptions'>
          <h2>Descriptions</h2>
          <menu> 
           {/* Random code, ask if right  */}
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

          {/* Checks if state is false, then asks you to pick button, conditional rendering */}
          {!selectedTopic ? <p>Please select a relevant topic</p> 
          : <div id = 'tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <ul>
            <li>{EXAMPLES[selectedTopic].actionPoints[0]}</li>
            <li>{EXAMPLES[selectedTopic].actionPoints[1]}</li>
            <li>{EXAMPLES[selectedTopic].actionPoints[2]}</li>
          </ul>
          <p>{EXAMPLES[selectedTopic].keyPractices}</p>
      </div> }

        </section>

      </main>
    </div>
  );
}

export default App;
