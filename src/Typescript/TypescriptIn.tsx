import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptIn() {

    return (
        <div>
            <Heading title="In / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>The in operator does a safe check for the existance of a property on an object and can be
used as a type guard.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
interface A {
    x: number;
}

interface B {
    y: string;
}

function doStuff(q: A | B) {
    if ('x' in q) {
    // q: A
    }
    else {
    // q: B
    }
}
                `}
            />
        </div>
      );
}

export default TypescriptIn;
