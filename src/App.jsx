// react imports
import { useState } from "react";
import { Component } from "react";
// component imports - used barrel files, ask about this
import { Header, CoreConcept, TabButton, TabContent } from "./components";

// domain model imports
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  // Lifecycle hooks begin here
  const [selectedTopic, setSelectedTopic] = useState();

  // initialization of arrays - ask if this is a good implementation
  const buttonNames = [
    "Ethical",
    "Inclusive",
    "Questing",
    "Authentic",
    "Trustworthy",
    "Nurturing",
  ];

  // function to handle tabButtons
  function handleClick(selectedButton) {
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
        <section id="core-concepts">
          <h2 className="coreCepts"> Core Concepts </h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => (
              <CoreConcept 
              key={concepts.title}
              {...concepts} />
            ))}
            {/*<CoreConcept 
                  title={concept.title}
                  description={concept.description}
                  image={concept.image}
            /> */}

            {/* Previous hardcoded implementation */}

            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            <CoreConcept {...CORE_CONCEPTS[4]} />
            <CoreConcept {...CORE_CONCEPTS[5]} /> */}
          </ul>
        </section>

        <section id="descriptions">
          <h2>Descriptions</h2>
          <menu>
            {/* Random code, ask if right or if you should hard code it next time   */}
            {buttonNames.map((name) => (
              <TabButton
                key={name}
                buttonName={name}
                onClickOfButton={() => handleClick(name)}
                isSelected={selectedTopic === name}
              />
            ))}
            {/*Previous Implementation
                  <TabButton 
                  buttonName="Inclusive"
                  onClickOfButton = {handleClick}/> 
              */}
          </menu>

          {/* {!selectedTopic ? (
            <p>Please select a relevant topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <ul>
                <li>{EXAMPLES[selectedTopic].actionPoints[0]}</li>
                <li>{EXAMPLES[selectedTopic].actionPoints[1]}</li>
                <li>{EXAMPLES[selectedTopic].actionPoints[2]}</li>
              </ul>
              <p>{EXAMPLES[selectedTopic].keyPractices}</p>
            </div>
          )} */}

          {/* We used ternary here to make it cover truth and false, ampersands-&& only cover true cases */}
          {!selectedTopic ? (
            <p>Please select a relevant topic</p>
          ) : (
            <TabContent example={EXAMPLES[selectedTopic]} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
