import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';
import { Big } from 'big.js';

function LibrariesBigJs() {
    const a = 0.1;
    const b = 0.2;
    const c = a + b; //0.30000000000000004
    const x = Big(0.1);
    const y = Big(0.2);
    const z = x.plus(y); // '0.3'

    return (
        <div>
            <Heading title="Big.js / JS Library" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail><a href="https://www.npmjs.com/package/big.js" rel="noreferrer" target="_blank">Big.js</a> - a small, fast JavaScript library for arbitrary-precision decimal arithmetic.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="200px"
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
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
                    <div>a = {a}</div>
                    <div>b = {b}</div>
                    <div>c = a + b = {c}</div>
                    <br />
                    <div>x = {x.toPrecision()}</div>
                    <div>y = {y.toPrecision()}</div>
                    <div>z = x + y = {z.toPrecision()}</div>
                </Box>
            </Box>
        </div>
      );
}

export default LibrariesBigJs;
