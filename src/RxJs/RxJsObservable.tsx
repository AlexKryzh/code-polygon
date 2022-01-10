import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';
import { 
of, 
from, 
interval, 
fromEvent,
bindCallback,
bindNodeCallback
} from 'rxjs';
import fetch from 'node-fetch';
import * as fs from 'fs';

function RxJsObservable() {

    const clientCode = (): void => {
        const observable1 = of(1);
        const subscription1 = observable1.subscribe({
            next: (v) => console.log(v),
            error: (e) => console.log(e),
            complete: () => console.info('1 complete')
        });
        subscription1.unsubscribe();

        const observable2 = from([10, 20, 30]);
        const subscription2 = observable2.subscribe({
            next: (v) => console.log(v),
            error: (e) => console.log(e),
            complete: () => console.info('2 complete')
        });
        subscription2.unsubscribe();

        const observable3 = interval(10);
        const subscription3 = observable3.subscribe({
            next: (v) => console.log(v),
            error: (e) => console.log(e),
            complete: () => console.info('3 complete')
        });
        subscription3.unsubscribe();

        const observable4 = fromEvent(document, 'click');
        const subscription4 = observable4.subscribe(
            (value) => console.log(value)
        );
        subscription4.unsubscribe();

        // function getJSON(url: string, cb: (response: unknown|null) => void) {
        //     fetch(url)
        //     .then(response => response.json())
        //     .then(json => cb(json))
        //     .catch(_ => cb(null));
        // }

        // const uri = 'https://jsonplaceholder.typicode.com/todos/1';
        // const observableFactory1 = bindCallback(getJSON);
        // const observable5 = observableFactory1(uri);
        // const subscription5 = observable5.subscribe(
        //     (value) => console.log(value)
        // );
        // subscription5.unsubscribe();

        const observableFactory2 = bindNodeCallback(fs.readFile);
        const observable = observableFactory2('/roadNames.txt');
        const subscription = observable.subscribe(
            (value) => console.log(value.toString())
        );
        subscription.unsubscribe();
    }

    return (
        <div>
            <Heading title="Observable / RxJs" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>The observable pattern is also known as the observable sequence pattern, which is the result of putting two other popular patterns together: the observer and the iterator patterns.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="300px"
                defaultLanguage="typescript"
                defaultValue={`
// We can create an observable given a value using the of function:

const observable = of(1);
const subscription = observable.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.log(e),
    complete: () => console.info('1 complete')
});
subscription.unsubscribe();

// We can create an observable given an existing array using the from function:

import { from } from "rxjs";
const observable = from([10, 20, 30]);
const subscription = observable.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.log(e),
    complete: () => console.info('2 complete')
});
subscription.unsubscribe();

// We can alternatively use the interval function to generate an array with a given number of elements:

const observable = interval(10);
const subscription = observable.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.log(e),
    complete: () => console.info('3 complete')
});
subscription.unsubscribe();

// It is also possible to create an observable using an event as the source of the
// items in the stream. We can do this using the fromEvent function:

const observable = fromEvent(document, "click");
const subscription = observable.subscribe(
    (value) => console.log(value)
);
subscription.unsubscribe();

// RxJS also defines a function named bindNodeCallback that allows us to
// work with the callbacks:

const observableFactory = bindNodeCallback(fs.readFile);
const observable = observableFactory("./roadNames.txt");
const subscription = observable.subscribe(
    (value) => console.log(value.toString())
);
subscription.unsubscribe();
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
                    <button onClick={clientCode}>Run Client Code</button>
                    <div>check the console messages</div>
                </Box>
            </Box>
        </div>
      );
}

export default RxJsObservable;
