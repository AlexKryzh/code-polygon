import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptExtract() {

    return (
        <div>
            <Heading title="Extract / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Constructs a type by extracting from Type all union members that are assignable to Union.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

//type T0 = "a"

type T1 = Extract<string | number | (() => void), Function>;
        
//type T1 = () => void

                `}
            />
        </div>
      );
}

export default TypescriptExtract;
