import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';
import { 
from,
fromEvent,
interval
} from 'rxjs';
import { 
max,
every,
find,
filter,
map,
reduce,
throttle, 
mapTo, 
scan
} from 'rxjs/operators';

function RxJsOperators() {

    const clientCode = (): void => {
        const numbers = from([2, 30, 22, 5, 60, 1]);

        const maxNumbers = numbers.pipe(max());
        const subscriptionMax = maxNumbers.subscribe(
            (value) => console.log(`Max number ${value}`)
        );
        subscriptionMax.unsubscribe();

        const everyNumbers = numbers.pipe(every(x => x < 70));
        const subscriptionEvery = everyNumbers.subscribe(
            (value) => console.log(`Every number ${value}`)
        );
        subscriptionEvery.unsubscribe();

        const findNumbers = numbers.pipe(find(x => x > 25));
        const subscriptionFind = findNumbers.subscribe(
            (value) => console.log(`Find number ${value}`)
        );
        subscriptionFind.unsubscribe();

        const filterNumbers = numbers.pipe(filter(x => x > 25));
        const subscriptionFilter = filterNumbers.subscribe(
            (value) => console.log(`Filter numbers ${value}`)
        );
        subscriptionFilter.unsubscribe();

        const mapNumbers = numbers.pipe(map(x => 10 * x));
        const subscriptionMap = mapNumbers.subscribe(
            (value) => console.log(`Map numbers ${value}`)
        );
        subscriptionMap.unsubscribe();

        const reduceNumbers = numbers.pipe(reduce((x, y) => x + y));
        const subscriptionReduce = reduceNumbers.subscribe(
            (value) => console.log(`Reduce numbers ${value}`)
        );
        subscriptionReduce.unsubscribe();

        const observable = fromEvent(document, "click")
        .pipe(mapTo(1))
        .pipe(throttle(x => interval(100)))
        .pipe(scan((acc, one) => acc + one, 0));
        const subscription = observable.subscribe(
            (value) => console.log(`Throttle ${value}`)
        );
        subscription.unsubscribe();
    }

    return (
        <div>
            <Heading title="Operators / RxJs" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Operators allow us to manipulate observables in many different ways.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="300px"
                defaultLanguage="typescript"
                defaultValue={`
// In RxJS, observables have a method named pipe , which is very similar to the pipe
// operator in functional programming. When we pipe two functions, we generate a
// new function that passes the return of the first function as arguments to the
// second function in the pipe.

// The max operator function can be used to find the biggest value in an observable.
// We must apply the max operator using the pipe method: import { from } from
// "rxjs";

const numbers = from([2, 30, 22, 5, 60, 1]);
const maxNumbers = numbers.pipe(max());
const subscriptionMax = maxNumbers.subscribe(
    (value) => console.log('Max number \${value}')
);
subscriptionMax.unsubscribe();

const everyNumbers = numbers.pipe(every(x => x < 10));
const subscriptionEvery = everyNumbers.subscribe(
    (value) => console.log('Every number \${value}')
);
subscriptionEvery.unsubscribe();

// The every operator function can be used to test whether all the values in an
// observable adhere to a given requirement

const numbers = from([2, 30, 22, 5, 60, 1]);
const everyNumbers = numbers.pipe(every(x => x < 70));
const subscriptionEvery = everyNumbers.subscribe(
    (value) => console.log('Every number \${value}')
);
subscriptionEvery.unsubscribe();

// The find operator function can be used to find the first value in an observable that
// adheres to a given constraint

const numbers = from([2, 30, 22, 5, 60, 1]);
const findNumbers = numbers.pipe(find(x => x > 25));
const subscriptionFind = findNumbers.subscribe(
    (value) => console.log('Find number \${value}')
);
subscriptionFind.unsubscribe();

// The filter operator function can be used to find the values in an observable that
// adhere to a given constraint

const numbers = from([2, 30, 22, 5, 60, 1]);
const filterNumbers = numbers.pipe(filter(x => x > 25));
const subscriptionFilter = filterNumbers.subscribe(
    (value) => console.log('Filter numbers \${value}')
);
subscriptionFilter.unsubscribe();

// The map operator function can be used to transform the values in an observable
// into derived values

const numbers = from([2, 30, 22, 5, 60, 1]);
const mapNumbers = numbers.pipe(map(x => 10 * x));
const subscriptionMap = mapNumbers.subscribe(
    (value) => console.log('Map numbers \${value}')
);
subscriptionMap.unsubscribe();

// The reduce operator function can be used to transform all the values in an
// observable into one single value

const numbers = from([2, 30, 22, 5, 60, 1]);
const reduceNumbers = numbers.pipe(reduce((x, y) => x + y));
const subscriptionReduce = reduceNumbers.subscribe(
    (value) => console.log('Reduce numbers \${value}')
);
subscriptionReduce.unsubscribe();

// The throttle operator function can be used to reduce the number of values that
// are added to an observable

const observable = fromEvent(document, "click")
.pipe(mapTo(1))
.pipe(throttle(x => interval(100)))
.pipe(scan((acc, one) => acc + one, 0));
const subscription = observable.subscribe(
    (value) => console.log('Throttle \${value}')
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

export default RxJsOperators;
