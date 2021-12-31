import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptCallable() {

    return (
        <div>
            <Heading title="Callable / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>You can annotate callables as a part of a type or an interface as follows.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
interface ReturnString {
    (): string
}

// An instance of such an interface would be a function that returns a string e.g.

declare const foo: ReturnString;
const bar1 = foo(); // bar is inferred as a string


interface Overloaded {
    (foo: string): string
    (foo: number): number
}
// example implementation
const overloaded: Overloaded = (foo) => foo;
// example usage
const str = overloaded(''); // str is inferred string
const number = overloaded(123); // num is inferred number

//To make it easy to specify callable signatures TypeScript also allows simple arrow type annotations e.g. a function that takes a number and returns a string can be annotated as: const simple: (foo: number) => string = (foo) => foo.toString();

//Newable is just a special type of callable type annotation with the prefix new . It simply means that you need to invoke with new e.g.
interface CallMeWithNewToGetString {
    new(): string
}
// Usage declare const Foo: CallMeWithNewToGetString;
const bar2 = new Foo(); // bar is inferred to be of type string
                `}
            />
        </div>
      );
}

export default TypescriptCallable;
