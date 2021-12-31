import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptDeclare() {

    return (
        <div>
            <Heading title="Declare / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>You can tell TypeScript that you are trying to describe code that exist elsewhere.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="200px"
                defaultLanguage="typescript"
                defaultValue={`
foo = 123; // Error, foo is not defined

declare var foo: number;
foo = 123; //allowed
//declaration should be put in .ts or .d.ts files
                `}
            />
        </div>
      );
}

export default TypescriptDeclare;
