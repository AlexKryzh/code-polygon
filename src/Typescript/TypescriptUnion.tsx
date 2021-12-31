import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptUnion() {

    return (
        <div>
            <Heading title="Union / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>Quite commonly in JavaScript you want to allow a property to be one of multiple types e.g. a string or a number . This is where the union type (denoted by | in a type annotation e.g. string|number ) comes in handy.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
function formatCommandline(command: string[]|string) {
    var line = '';
    if (typeof command === 'string') {
    line = command.trim();
    } else {
    line = command.join(' ').trim();
    }
    // Do stuff with line: string
}
                `}
            />
        </div>
      );
}

export default TypescriptUnion;
