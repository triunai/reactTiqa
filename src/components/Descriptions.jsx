import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import TabContent from "./TabContent.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Descriptions() {
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
    <Section 
    title = "Descriptions" 
    id = "descriptions">
      <Tabs
      buttonsContainer = "menu"
        buttons = {
          <>
            {buttonNames.map((btnName) => (
              <TabButton
                key = {btnName}
                buttonName = {btnName}
                onClick = {() => handleClick(btnName)}
                isSelected = {selectedTopic === btnName}
              />
            ))}
          </>
        }
      />
      {/* We used ternary here to make it cover truth and false, ampersands-&& only cover true cases */}
      {!selectedTopic ? (
        <p>Please select a relevant topic</p>
      ) : (
        <TabContent example={EXAMPLES[selectedTopic]} />
      )}
    </Section>
  );
}
