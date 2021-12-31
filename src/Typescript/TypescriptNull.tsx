import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptIndexSignature() {

    return (
        <div>
            <Heading title="Null / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>TypeScript team doesn't use null : TypeScript coding guidelines and it hasn't caused any problems. Douglas Crockford thinks null is a bad idea and we should all just use undefined</Detail>
                    </CardRow>
                </Card>
            </Box>
            <div>
                <h2>Null is Bad</h2>
                <p>
                    JavaScript (and by extension TypeScript) has two bottom types : null and undefined .
                    They are intended to mean different things:
                    Something hasn't been initialized : undefined
                    Something is currently unavailable: null
                    Most other languages only have one (commonly called null ). Since by default JavaScript
                    will evaluate an uninitialized variable / parameter / property to undefined (you don't get a
                    choice) we recommend you just use that for your own unavailable status and don't bother
                    with null .
                </p>
                <h2>Real world discussions</h2>
                <p>
                    TypeScript team doesn't use null : TypeScript coding guidelines and it hasn't caused any
                    problems. Douglas Crockford thinks null is a bad idea and we should all just use
                    undefined.
                </p>
            </div>
        </div>
      );
}

export default TypescriptIndexSignature;
