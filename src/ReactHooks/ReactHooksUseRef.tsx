import React, {useRef} from 'react';
import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function ReactHooksUseRef() {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current?.focus();
    };

    return (
        <div>
            <Heading title="Adapter / Structural Design Pattern" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="300px"
                defaultLanguage="typescript"
                defaultValue={`
import React, {useRef} from 'react';
function TextInputWithFocusButton() {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // current points to the mounted text input element
        inputEl.current?.focus();
    };
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>);
    }
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex">
                    <input ref={inputEl} type="text" />
                    <button onClick={onButtonClick}>Focus the input</button>
                </Box>
            </Box>
        </div>
      );
}

export default ReactHooksUseRef;
