import componentsImg from './assets/components.png'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { Component } from 'react';

function App() {

  let tabContent = 'Please click a relevant button';
  const buttonNames = ["Ethical", "Inclusive", "Question", "Authentic", "Trustworthy", "Nurturing"];

  function handleClick(selectedButton){
    // selectedButton => 'tabThatWasClicked'
    tabContent ='';
    tabContent = selectedButton;

    console.log("click handled from app.jsx: ", selectedButton);
  }

  return (
    <div>
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
          {buttonNames.map( name =>
            <TabButton 
              key = {name}
              buttonName = {name}
              onClickOfButton = { () => handleClick({name})}
              />
           )}
              {/*Previous Implementation
                  <TabButton 
                  buttonName="Inclusive"
                  onClickOfButton = {handleClick}/> 
              */
              }
          </menu>
          {/* Where the dynamic content goes */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
