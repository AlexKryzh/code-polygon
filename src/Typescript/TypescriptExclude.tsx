import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptExclude() {

    return (
        <div>
            <Heading title="Exclude / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
type T0 = Exclude<"a" | "b" | "c", "a">;

//type T0 = "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
        
//type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
        
//type T2 = string | number

                `}
            />
        </div>
      );
}

export default TypescriptExclude;
