import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptInstanceType() {

    return (
        <div>
            <Heading title="InstanceType / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Constructs a type consisting of the instance type of a constructor function in Type.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
class C {
    x = 0;
    y = 0;
}

type T0 = InstanceType<typeof C>;
    
//type T0 = C

type T1 = InstanceType<any>;
    
//type T1 = any

type T2 = InstanceType<never>;
    
//type T2 = never

type T3 = InstanceType<string>;

// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
// type T3 = any

type T4 = InstanceType<Function>;

// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// Type 'Function' provides no match for the signature 'new (...args: any): any'.
// type T4 = any

                `}
            />
        </div>
      );
}

export default TypescriptInstanceType;
