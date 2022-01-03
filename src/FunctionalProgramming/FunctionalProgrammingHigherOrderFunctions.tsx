import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function FunctionalProgrammingHigherOrderFunctions() {

    function addDelay(func: () => void, ms: number) {
        return () => {
            setTimeout(() => {
                func();
            }, ms);
        };
    }
    
    function sayHello() {
        console.log("Hello world!");
    }

    const clientCode = (): void => {
        addDelay(sayHello, 2000)();
        //or
        //const delayedSayHello = addDelay(sayHello, 2000);
        //delayedSayHello(); // Prints "Hello world!" (after 2000 ms)
    }

    return (
        <div>
            <Heading title="Higher-order functions / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>A higher-order function is a function that does at least one of the following:</p>
                            <ol>
                                <li>Takes one or more functions as arguments</li>
                                <li>Returns a function as its result</li>
                            </ol>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="300px"
                defaultLanguage="typescript"
                defaultValue={`
function addDelay(func: () => void, ms: number) {
    return () => {
        setTimeout(() => {
            func();
        }, ms);
    };
}
function sayHello() {
    console.log("Hello world!");
}

const delayedSayHello = addDelay(sayHello, 2000);
delayedSayHello(); // Prints "Hello world!" (after 2000 ms)
//or addDelay(sayHello, 2000)()
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
                    <button onClick={clientCode}>Run Client Code</button>
                    <div>check the console messages</div>
                </Box>
            </Box>
        </div>
      );
}

export default FunctionalProgrammingHigherOrderFunctions;
