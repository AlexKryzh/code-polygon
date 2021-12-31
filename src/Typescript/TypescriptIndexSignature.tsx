import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptIndexSignature() {

    return (
        <div>
            <Heading title="Index Signature / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>So we've been using any to tell TypeScript to let us do whatever we want. We can actually specify an index signature explicitly.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
let foo:{ [index:string] : {message: string} } = {};
/**
* Must store stuff that conforms the structure
*/
/** Ok */
foo['a'] = { message: 'some message' };
/** Error: must contain a message or type string. You have a typo in message */
foo['a'] = { messages: 'some message' };
/**
* Stuff that is read is also type checked
*/
/** Ok */
foo['a'].message;
/** Error: messages does not exist. You have a typo in message */
foo['a'].messages;

/** Okay */
interface Foo {
    [key:string]: number
    x: number;
    y: number;
}

/** Error */
interface Bar {
    [key:string]: number
    x: number;
    y: string; // Property y must of of type number
}

type Index = 'a' | 'b' | 'c'
type FromIndex = { [k in Index]?: number }

const good: FromIndex = {b:1, c:2}

// Error:
// Type '{ b: number; c: number; d: number; }' is not assignable to type 'FromIndex'.
// Object literal may only specify known properties, and 'd' does not exist in type '
FromIndex'.
const bad: FromIndex = {b:1, c:2, d:3};
                `}
            />
        </div>
      );
}

export default TypescriptIndexSignature;
