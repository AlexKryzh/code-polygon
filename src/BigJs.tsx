import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';
import { Big } from 'big.js';

function BigJs() {
    const a = 0.1;
    const b = 0.2;
    const c = a + b; //0.30000000000000004
    const x = Big(0.1);
    const y = Big(0.2);
    const z = x.plus(y); // '0.3'

    return (
        <div>
            <Heading title="Adapter / Structural Design Pattern" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="300px"
                defaultLanguage="typescript"
                defaultValue={`
const a = 0.1;
const b = 0.2;
const c = a + b; //0.30000000000000004
const x = Big(0.1);
const y = Big(0.2);
const z = x.plus(y); // '0.3'
    }
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex">
                    <div>a = {a}</div>
                    <div>b = {b}</div>
                    <div>c = {c}</div>
                    <br />
                    <div>x = {x}</div>
                    <div>y = {y}</div>
                    <div>z = {z}</div>
                </Box>
            </Box>
        </div>
      );
}

export default BigJs;
