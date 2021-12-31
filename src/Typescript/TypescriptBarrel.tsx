import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptIn() {

    return (
        <div>
            <Heading title="Barrel / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>A barrel is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
//Imagine the following class structure in a library:
// demo/foo.ts
export class Foo {}
// demo/bar.ts
export class Bar {}
// demo/baz.ts
export class Baz {}

//Without a barrel, a consumer would need three import statements:
import { Foo } from '../demo/foo';
import { Bar } from '../demo/bar';
import { Baz } from '../demo/baz';

//You can instead add a barrel demo/index.ts containing the following:
// demo/index.ts
export * from './foo'; // re-export all of its exports
export * from './bar'; // re-export all of its exports
export * from './baz'; // re-export all of its exports

//Now the consumer can import what it needs from the barrel:
import { Foo, Bar, Baz } from '../demo'; // demo/index.ts is implied
                `}
            />
        </div>
      );
}

export default TypescriptIn;
