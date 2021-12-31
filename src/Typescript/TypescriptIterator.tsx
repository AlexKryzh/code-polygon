import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptIterator() {

    return (
        <div>
            <Heading title="Iterator / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>Iterator itself is not a TypeScript or ES6 feature, Iterator is a Behavioral Design Pattern
common for Object oriented programming languages.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
//Iterator, generally, an object which implements the following interface:
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}
//This interface allows to retrieve a value from some collection or sequence which belongs to the object.

//The IteratorResult is simply a value + done pair:
interface IteratorResult<T> {
    done: boolean;
    value: T;
}
                `}
            />
        </div>
      );
}

export default TypescriptIterator;
