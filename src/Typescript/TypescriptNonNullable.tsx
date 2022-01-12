import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptNonNullable() {

    return (
        <div>
            <Heading title="NonNullable / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Constructs a type by excluding null and undefined from Type.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
type T0 = NonNullable<string | number | undefined>;

//type T0 = string | number

type T1 = NonNullable<string[] | null | undefined>;
        
//type T1 = string[]

                `}
            />
        </div>
      );
}

export default TypescriptNonNullable;
