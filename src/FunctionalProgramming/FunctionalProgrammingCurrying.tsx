import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function FunctionalProgrammingCurrying() {

    return (
        <div>
            <Heading title="Currying / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Currying is a functional programming technique that allows us to partially apply a function without having to worry about the way in which we implement our functions.</p>
                            <p>Currying is the process of taking a function that takes multiple arguments and transforming it into a chain of unary functions.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// The following function allows us to transform a function, fn, which takes two arguments, a and
// b, into a function that takes one argument, a, and returns another function that
// takes one argument, b: 

function curry2<T1, T2, T3>(fn: (a: T1, b: T2) => T3) {
    return (a: T1) => (b: T2) => fn(a, b);
}

// The above function is a higher-order function that allows our functions to be
// partially applied while keeping their implementation agnostic of this concern.

function add(a: number, b: number) {
    return a + b;
}

const curriedAdd = curry2(add);
const add5 = curriedAdd(5);
const addResult = add5(5);
console.log(addResult); // 10

// The curry2 function allows us to transform a binary function into two unary
// functions. The curry2 function is a higher-order function and can be used with
// any binary function. For example, in the preceding code snippet, we passed the
// add function to the curry2 function, but the following example passes the multiply
// function to the curry2 function instead: 

function multiply(a: number, b: number) {
    return a * b;
}
const curriedMultiply = curry2(multiply);
const multiplyBy5 = curriedMultiply(5);
const multiplyResult = multiplyBy5(5);
console.log(multiplyResult); // 25

// In the preceding section on functional partial application, we learned how to use
// partial application to use compose with functions that are not unary. We declared
// the following function named replace and then passed it to the compose function:

const replace = (f: string, r: string) => (s: string) => s.split(f).join(r);
const trimCapitalizeAndReplace = compose(
    trimAndCapitalize,
    replace("/", "-")
);

// We can declare a function named curry3, which transforms a ternary function into
// a chain of three unary functions:

function curry3<T1, T2, T3, T4>(fn: (a: T1, b: T2, c: T3) => T4) {
    return (a: T1) => (b: T2) => (c: T3) => fn(a, b, c);
}

// We can then use the curry3 function to rewrite the replace function in a way that is
// agnostic of the functional partial application implementation details:

const replace = (s: string, f: string, r: string) => s.split(f).join(r);
const curriedReplace = curry3(replace);
const trimCapitalizeAndReplace = compose(
    trimAndCapitalize,
    curriedReplace("/")("-")
);

const replace = (s: string, f: string, r: string) => s.split(f).join(r);<br/>const
replaceForwardSlash = replace.bind(replace, "/");<br/>const
replaceForwardSlashWithDash =
replaceForwardSlash.bind(replaceForwardSlash, "-");
<br/>replaceForwardSlashWithDash("13/feb/1989");

const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1)
=> f(g(x));<br/>const trim = (s: string) => s.trim();<br/>const capitalize = (s:
string) => s.toUpperCase();<br/>const trimAndCapitalize = compose(trim,
capitalize);<br/>const replace = (s: string, f: string, r: string) => s.split(f).join(r);
<br/>const replaceForwardSlashWithDash = replace.bind(replace, "/", "-");
<br/>const trimCapitalizeAndReplace = compose(trimAndCapitalize,
replaceForwardSlashWithDash);<br/>const result = trimCapitalizeAndReplace("
13/feb/1989 ");<br/>console.log(result); // "13-FEB-1989"

// The strictBindCallApply compilation flag ensures that the return as a result of
// invoking the bind method will have the correct type. In versions of TypeScript
// prior to 3.2, the return of the bind method was of the any type.
                `}
            />
        </div>
      );
}

export default FunctionalProgrammingCurrying;
