import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function FunctionalProgrammingPipes() {

    return (
        <div>
            <Heading title="Pipe / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>A pipe is a function or operator that allows us to pass the output of a function as the input of another.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// JavaScript and TypeScript don't support pipes natively (as
// an operator), but we can implement our pipes using the following function:

const pipe = <T>(...fns: Array<(arg: T) => T>) =>
    (value: T) =>
        fns.reduce((acc, fn) => fn(acc), value);

// We are going to use the curry3, trim, capitalize, and replace functions that we
// declared previously in this chapter:

const trim = (s: string) => s.trim();
const capitalize = (s: string) => s.toUpperCase();

const replace = curry3(
    (s: string, f: string, r: string) => s.split(f).join(r)
);

// We can then use the pipe function to declare a new function:

const trimCapitalizeAndReplace = pipe(
    trim,
    capitalize,
    replace("/")("-")
);

trimCapitalizeAndReplace(" 13/feb/1989 "); // "13-FEB-1989"

// The pipe function ensures that the output of the trim function is passed to the
// capitalize function. The return of the capitalize function is then passed to the
// replace function, which has already been applied in part.

// There is an official proposal to add a new operator to JavaScript known as the
// pipeline operator (|>). This operator will allow us to use pipes natively as
// follows:

// const result = " 13/feb/1989 "
// |> trim
// |> capitalize
// |> replace("/")("-");
                `}
            />
        </div>
      );
}

export default FunctionalProgrammingPipes;
