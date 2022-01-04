import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';
var deepEqual = require('deep-equal')

function LibrariesDeepEqual() {
    console.dir([
        deepEqual(
            { a : [ 2, 3 ], b : [ 4 ] },
            { a : [ 2, 3 ], b : [ 4 ] }
        ),
        deepEqual(
            { x : 5, y : [6] },
            { x : 5, y : 6 }
        )
    ]);
    return (
        <div>
            <Heading title="deep-egual / JS Library" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>deepEqual(a, b, opts)</p>
                            <p>Compare objects a and b, returning whether they are equal according to a recursive equality algorithm.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="200px"
                defaultLanguage="typescript"
                defaultValue={`
var deepEqual = require('deep-equal');
console.dir([
    deepEqual(
        { a : [ 2, 3 ], b : [ 4 ] },
        { a : [ 2, 3 ], b : [ 4 ] }
    ),
    deepEqual(
        { x : 5, y : [6] },
        { x : 5, y : 6 }
    )
]);
                `}
            />
        </div>
      );
}

export default LibrariesDeepEqual;
