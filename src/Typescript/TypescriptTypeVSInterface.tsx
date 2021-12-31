import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';

function TypescriptTypeVSInterface() {

    return (
        <div>
            <Heading title="Type vs Interface / Typescript" />
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// Use type when you might need a union or intersection:
type Foo = number | { someProperty: number }

//Use interface when you want extends or implements e.g
interface Foo {
    foo: string;
}
interface FooBar extends Foo {
    bar: string;
}
class X implements FooBar {
    foo: string;
    bar: string;
}

//Otherwise use whatever makes you happy that day.
                `}
            />
        </div>
      );
}

export default TypescriptTypeVSInterface;
