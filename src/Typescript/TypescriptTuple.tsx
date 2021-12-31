import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptTuple() {

    return (
        <div>
            <Heading title="Tuple / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>JavaScript doesn't have first class tuple support. People generally just use an array as a
tuple. This is exactly what the TypeScript type system supports. Tuples can be annotated
using :[typeofmember1, typeofmember2] etc. A tuple can have any number of members.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
var nameNumber: [string, number];
// Okay
nameNumber = ['Jenny', 8675309];
// Error!
nameNumber = ['Jenny', '867-5309'];
                `}
            />
        </div>
      );
}

export default TypescriptTuple;
