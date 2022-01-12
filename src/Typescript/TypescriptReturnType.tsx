import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptReturnType() {

    return (
        <div>
            <Heading title="ReturnType / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Constructs a type consisting of the return type of function Type.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
        
//type T0 = string

type T1 = ReturnType<(s: string) => void>;
        
//type T1 = void

type T2 = ReturnType<<T>() => T>;
        
//type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
        
//type T3 = number[]

type T4 = ReturnType<typeof f1>;
        
// type T4 = {
//     a: number;
//     b: string;
// }

type T5 = ReturnType<any>;
        
//type T5 = any

type T6 = ReturnType<never>;
        
//type T6 = never

type T7 = ReturnType<string>;

//Type 'string' does not satisfy the constraint '(...args: any) => any'.    
//type T7 = any

type T8 = ReturnType<Function>;

// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
// type T8 = any

                `}
            />
        </div>
      );
}

export default TypescriptReturnType;
