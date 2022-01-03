import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function FunctionalProgrammingFunctionOverloading() {

    function test(value: (string|number|boolean)): string {
        switch (typeof value) {
            case "string":
                return 'My name is ' + value + '.';
            case "number":
                return 'Im ' + value + ' years old.';
            case "boolean":
                return value ? "I'm single." : "I'm not single.";
            default:
                throw new Error("Invalid Operation!");
        }
    }

    const clientCode = (): void => {
        console.log('clientCode');
        console.log(test('Adam'));
        console.log(test(5));
        console.log(test(true));
    }

    return (
        <div>
            <Heading title="Function Overloading / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Function, or method, overloading is the ability to create multiple methods with the same name and a different number of parameters or types. In TypeScript, we can overload a function by specifying all function signatures (known as overload signatures) of a function, followed by a signature (known as the implementation signature).</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="360px"
                defaultLanguage="typescript"
                defaultValue={`
function test(value: (string|number|boolean)): string {
    switch (typeof value) {
        case "string":
            return 'My name is ' + value + '.';
        case "number":
            return 'I'm ' + value + ' years old.';
        case "boolean":
            return value ? "I'm single." : "I'm not single.";
        default:
            throw new Error("Invalid Operation!");
    }
}

test('Adam');
test(5);
test(true);

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

export default FunctionalProgrammingFunctionOverloading;
