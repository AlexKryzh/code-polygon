import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptGenerators() {

    return (
        <div>
            <Heading title="Generators / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>If we invoke a function in TypeScript, we can assume that, once the function starts running, it will always run to completion before any other code can run.</p>
                            <p>However, one type of function known as a generator can may be paused in the middle of execution—once or many times—and resumed later, allowing other code to run during these paused periods.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// A generator represents a sequence of values. The interface of a generator object
// is just an iterator. An iterator implements the following interface:
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

// The next function can be invoked until it runs out of values. We can define a
// generator by using the function keyword, followed by an asterisk, (*). The yield
// keyword is used to stop the execution of the function and return a value. Let's
// look at an example:

function* foo1() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
}

let bar1 = foo1();
bar1.next(); // Object {value: 1, done: false}
bar1.next(); // Object {value: 2, done: false}
bar1.next(); // Object {value: 3, done: false}
bar1.next(); // Object {value: 4, done: false}
bar1.next(); // Object {value: 5, done: true}
bar1.next(); // Object { done: true }

function* foo2() {
    let i = 1;
    while (true) { // Infinite loop!
        yield i++;
    }
}

let bar2 = foo2();
bar2.next(); // Object {value: 1, done: false}
bar2.next(); // Object {value: 2, done: false}
bar2.next(); // Object {value: 3, done: false}
bar2.next(); // Object {value: 4, done: false}
bar2.next(); // Object {value: 5, done: false}
bar2.next(); // Object {value: 6, done: false}
bar2.next(); // Object {value: 7, done: false}
                `}
            />
        </div>
      );
}

export default TypescriptGenerators;
