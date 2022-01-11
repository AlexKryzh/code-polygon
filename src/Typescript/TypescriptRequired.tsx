import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptRequired() {

    return (
        <div>
            <Heading title="Required / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Constructs a type consisting of all properties of Type set to required. The opposite of Partial.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };

// Property 'b' is missing in type '{ a: number; }' 
// but required in type 'Required<Props>'.

                `}
            />
        </div>
      );
}

export default TypescriptRequired;
