import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function FunctionalProgrammingComposition() {

    return (
        <div>
            <Heading title="Composition / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Functional composition is a technique or pattern that allows us to combine multiple functions to create a more complex function.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
//The following code snippet declares two simple functions:

const trim = (s: string) => s.trim();
const capitalize = (s: string) => s.toUpperCase();

// That two simple functions declared by the preceding code snippet are the
// following:
// A function used to trim a string
// A function used to transform a piece of text into uppercase

// We can create a function that performs both of the preceding operations by
// composing them as follows:

const trimAndCapitalize = (s: string) => capitalize(trim(s));

// trimAndCapitalize is a function that invokes the trim function (using s as its
// argument) and passes its return to the capitalize function. We can invoke the
// trimAndCapitalize function as follows:

trimAndCapitalize(" hello world "); // "HELLO WORLD"

// The composition of two functions, f(x) and g(x), is defined as f(g(x)), and that is
// exactly what we have done in the implementation of the trimAndCapitalize
// function. However, such a behavior can be abstracted using a higher-order
// function:

const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));

// We can then use the preceding function to compose two given functions:

const trimAndCapitalize = compose(trim, capitalize);

//We can then invoke the trimAndCapitalize function as follows:

trimAndCapitalize(" hello world "); // "HELLO WORLD"

// One important thing to note is that the return of the g function is passed as the
// argument of the f function. This means that f can only take one argument (it
// must be a unary function). The type of the only argument of f must match the
// return type of the g function. These limitations can be expressed in a more
// correct definition of the compose function:

const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

// We can also compose in functions generated with the compose function:

const composed1 = compose(func1, func2);
const composed2 = compose(func1, func2);
const composed3 = compose(composed1, composed2);

// Please note that the entire example is included in the companion source code.

// Or we can declare a higher-order function to compose three functions in a single
// call:

const compose3 = <T1, T2, T3, T4>(
    f: (x: T3) => T4,
    g: (x: T2) => T3,
    h: (x: T1) => T2
) => (x: T1) => f(g(h(x)));

// We can then invoke it as follows:

const composed1 = composeMany(func1, func2, func3);

// We can also create a helper that allows us to compose an unlimited number of
// functions:

const composeMany = <T>(...functions: Array<(arg: T) => T>) =>
    (arg: any) =>
        functions.reduce((prev, curr) => {
            return curr(prev);
        }, arg);

//We can then invoke it as follows:

const composed1 = composeMany(func1, func2, func3, func4);
const composed2 = composeMany(func1, func2, func3, func4, func5);

// Functional composition is an extremely powerful technique, but it can be hard to
// put into practice in certain scenarios, for example, when our functions are not
// unary functions. However, there are other techniques, such as functional partial
// application, that can help in those scenarios, as we will see in the following
// section.

                `}
            />
        </div>
      );
}

export default FunctionalProgrammingComposition;
