import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptAsynchronousGenerators() {

    let counter = 0;

    function doSomethingAsync() {
        return new Promise<number>((r) => {
            setTimeout(() => {
                counter += 1;
                r(counter);
            }, 1000);
        });
    }

    async function* g1() {
        yield await doSomethingAsync();
        yield await doSomethingAsync();
        yield await doSomethingAsync();
    }

    const i: AsyncIterableIterator<number> = g1();


    const clientCode = (iterator: AsyncIterableIterator<number>): void => {
        iterator.next().then((n) => console.log(n));
    }

    return (
        <div>
            <Heading title="Asynchronous Generators / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>An asynchronous iterator returns a promise every time we invoke the next method.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// An asynchronous iterator implements the following interface:
interface AsyncIterator<T> {
    next(value?: any): Promise<IteratorResult<T>>;
    return?(value?: any): Promise<IteratorResult<T>>;
    throw?(e?: any): Promise<IteratorResult<T>>;
}

// An asynchronous iterator returns a promise every time we invoke the next
// method. The following code snippet demonstrates how asynchronous iterators
// can be very useful when used in conjunction with asynchronous functions:

let counter = 0;

function doSomethingAsync() {
    return new Promise<number>((r) => {
        setTimeout(() => {
            counter += 1;
            r(counter);
        }, 1000);
    });
}

async function* g1() {
    yield await doSomethingAsync();
    yield await doSomethingAsync();
    yield await doSomethingAsync();
}

let i: AsyncIterableIterator<number> = g1();
i.next().then((n) => console.log(n)); // 1
i.next().then((n) => console.log(n)); // 2
i.next().then((n) => console.log(n)); // 3
                `}
            />

            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
                    <button onClick={() => clientCode(i)}>Run Client Code</button>
                    <div>check the console messages</div>
                </Box>
            </Box>
        </div>
      );
}

export default TypescriptAsynchronousGenerators;
