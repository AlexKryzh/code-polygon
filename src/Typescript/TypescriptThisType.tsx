import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptThisType() {

    return (
        <div>
            <Heading title="ThisType / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type.</p>
                            <p>Note that the noImplicitThis flag must be enabled to use this utility.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`

type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        },
    },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

// In the example above, the methods object in the argument to makeObject has a contextual type 
// that includes ThisType<D & M> and therefore the type of this in methods within 
// the methods object is { x: number, y: number } & { moveBy(dx: number, dy: number): number }. 
// Notice how the type of the methods property simultaneously is an inference target and a source for the this type in methods.

// The ThisType<T> marker interface is simply an empty interface declared in lib.d.ts. 
// Beyond being recognized in the contextual type of an object literal, the interface acts like any empty interface.
                `}
            />
        </div>
      );
}

export default TypescriptThisType;
