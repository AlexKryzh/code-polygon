import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function FunctionalProgrammingPartialApplication() {

    return (
        <div>
            <Heading title="Partial Application / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Partial application is a functional programming technique that allows us to pass the arguments required by a function at different points in time.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// The following code snippet implements the preceding function using a higher-
// order function to allow us to provide the required arguments at different points in
// time:

function add(a: number) {
    return (b: number) => {
        return a + b;
    };
}

const add5 = add(5); // The 1st argument is provided
const result = add5(5); // The 2nd argument is provided later
console.log(result); // 10


// We can also write a function that allows both its complete and partial
// application:

function add(a: number, b?: number) {
    if (b !== undefined) {
        return a + b;
    } else {
        return (b2: number) => {
            return a + b2;
        };
    }
}

const result1 = add(5, 5); // All arguments are
console.log(result1); // 10
const add5 = add(5) as (b: number) => number; // The 1st passed
const result2 = add5(5); // The 2nd argument is passed later
console.log(result2); // 10


//We can implement the function in a way that allows us to apply the
//function partially:
const replace = (f: string, r: string) => (s: string) => s.split(f).join(r);

//We can then use the compose function without any difficulties:

const trimCapitalizeAndReplace = compose(trimAndCapitalize, replace("/", "-"));
trimCapitalizeAndReplace(" 13/feb/1989 "); // "13-FEB-1989"

                `}
            />
        </div>
      );
}

export default FunctionalProgrammingPartialApplication;
