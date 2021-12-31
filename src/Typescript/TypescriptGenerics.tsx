import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptGenerics() {

    return (
        <div>
            <Heading title="Generics / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>Many algorithms and data structures in computer science do not depend on the actual type
of the object. However you still want to enforce a constraint between various variables.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// Safety!
reversed[0] = '1'; // Error!
reversed = ['1', '2']; // Error!

reversed[0] = 1; // Okay
reversed = [1, 2]; // Okay

//Since TypeScript has a structural type system, type parameters only affect compatibility when used by member. For example, in the following T has no impact on compatibility:

interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y; // okay, y matches structure of x

//However if T is used, it will play a role in compatibility based on its instantiation as shown below:
interface NotEmpty<T> {
    data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;

x = y; // error, x and y are not compatible
                `}
            />
        </div>
      );
}

export default TypescriptGenerics;
