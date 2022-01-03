import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptHoisting() {

    return (
        <div>
            <Heading title="Hoisting / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.</p>

                            <p>Hoisting allows functions to be safely used in code before they are declared.</p>

                            <p>Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="300px"
                defaultLanguage="typescript"
                defaultValue={`
catName("Tiger");

function catName(name) {
    console.log("My cat's name is " + name);
}

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.

console.log(name); // Throws ReferenceError exception - the interpreter doesn't know about name.
var name = 'Adam'; // Initialization
                `}
            />
        </div>
      );
}

export default TypescriptHoisting;
