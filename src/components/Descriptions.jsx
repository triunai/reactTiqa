import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

export default function Descriptions (){
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
  
    return (
        <section id="descriptions">
          <h2>Descriptions</h2>
          <menu>
            {/* Random code, ask if right or if you should hard code it next time   */}
            {buttonNames.map((btnName) => (
              <TabButton
                key={btnName}
                buttonName={btnName}
                onClickOfButton={() => handleClick(btnName)}
                isSelected={selectedTopic === btnName}
              />
            ))}
          </menu>

          {/* We used ternary here to make it cover truth and false, ampersands-&& only cover true cases */}
          {!selectedTopic ? (
            <p>Please select a relevant topic</p>
          ) : (
            <TabContent example={EXAMPLES[selectedTopic]} />
          )}
        </section>
    );
}