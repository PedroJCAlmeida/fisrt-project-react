import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data";

export default function Exemples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        //selectdButton => 'components','jsx','props','state'
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    return (
        <Section title="Exemples" id="examples">
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </menu>
            {!selectedTopic ? (
                <p>Please select a topic.</p>
            ) : (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
            )}
        </Section>
    );
}