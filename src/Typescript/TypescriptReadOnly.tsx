import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptReadOnly() {

    return (
        <div>
            <Heading title="Readonly / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>TypeScript's type system allows you to mark individual properties on an interface as readonly. This allows you to work in a functional way (unexpected mutation is bad).</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
function foo(config: {
    readonly bar: number,
    readonly bas: number
}) {
    // ..
}

let config = { bar: 123, bas: 123 };
foo(config);
// You can be sure that config isn't changed

//Of course you can use readonly in interface and type definitions as well e.g.:
type Foo = {
    readonly bar: number;
    readonly bas: number;
}
// Initialization is okay
let foo: Foo = { bar: 123, bas: 456 };

// Mutation is not
foo.bar = 456; // Error: Left-hand side of assignment expression cannot be a constant or a read-only property

//You can even declare a class property as readonly . You can initialize them at the point of declaration or in the constructor as shown below:

class Foo {
    readonly bar = 1; // OK
    readonly baz: string;
    constructor() {
        this.baz = "hello"; // OK
    }
}

//There is a type Readonly that takes a type T and marks all of its properties as readonly using mapped types. Here is a demo that uses it in practice:

type Foo = {
    bar: number;
    bas: number;
}
type FooReadonly = Readonly<Foo>;
let foo:Foo = {bar: 123, bas: 456};
let fooReadonly:FooReadonly = {bar: 123, bas: 456};
foo.bar = 456; // Okay
fooReadonly.bar = 456; // ERROR: bar is readonly


//You can even mark index signatures as readonly:

/**
* Declaration
*/
interface Foo {
    readonly[x: number]: number;
}

/**
* Usage
*/
let foo: Foo = { 0: 123, 2: 345 };
console.log(foo[0]); // Okay (reading)
foo[0] = 456; // Error (mutating): Readonly

// This is great if you want to use native JavaScript arrays in an immutable fashion. In fact TypeScript ships with a ReadonlyArray<T> interface to allow you to do just that:

let foo: ReadonlyArray<number> = [1, 2, 3];
console.log(foo[0]); // Okay
foo.push(4); // Error: push does not exist on ReadonlyArray as it mutates the array
foo = foo.concat([4]); // Okay: create a copy

                `}
            />
        </div>
      );
}

export default TypescriptReadOnly;
