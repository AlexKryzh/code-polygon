import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

const heroes = [
    {
        name: "Spiderman",
        powers: [
            "wall-crawling",
            "enhanced strength",
            "enhanced speed",
            "spider-Sense"
        ]
    },
    {
        name: "Superman",
        powers: [
            "flight",
            "superhuman strength",
            "x-ray vision",
            "super-speed"
        ]
    }
];

function FunctionalProgrammingLaziness() {

    function lazyFind<T>(arr: T[], filter: (i: T) => boolean): T {
        let hero: T | null = null;
        const proxy = new Proxy(
            {},
            {
                get: (obj, prop) => {
                    console.log("Filtering...");
                    if (!hero) {
                        hero = arr.find(filter) || null;
                    }
                    return hero ? (hero as any)[prop] : null;
                }
            }
        );
        return proxy as any;
    }

    const clientCode = (): void => {
        console.log("A");
        const spiderman = lazyFind(heroes, (h) => h.name === "Spiderman");
        console.log("B");
        console.log(spiderman.name);
        console.log("C");
    }

    return (
        <div>
            <Heading title="Laziness / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>MLazy evaluation is a technique or pattern that delays the evaluation of an expression until its value is needed.</p>
                            <p>Lazy evaluation is a technique that delays the execution of some operations until they can no longer be delayed. Lazy evaluation can sometimes lead to performance gains.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
function lazyFind<T>(arr: T[], filter: (i: T) => boolean): T {
    let hero: T | null = null;
    const proxy = new Proxy(
        {},
        {
            get: (obj, prop) => {
                console.log("Filtering...");
                if (!hero) {
                    hero = arr.find(filter) || null;
                }
                return hero ? (hero as any)[prop] : null;
            }
        }
    );
    return proxy as any;
}

const heroes = [
    {
        name: "Spiderman",
        powers: [
            "wall-crawling",
            "enhanced strength",
            "enhanced speed",
            "spider-Sense"
        ]
    },
    {
        name: "Superman",
        powers: [
            "flight",
            "superhuman strength",
            "x-ray vision",
            "super-speed"
        ]
    }
];

console.log("A");
const spiderman = lazyFind(heroes, (h) => h.name === "Spiderman");
console.log("B");
console.log(spiderman.name);
console.log("C");

// The following code snippet implements a function named filter and a function
// named find. Both functions are the equivalent of the array filter and find methods
// respectively. However, the filter function uses a generator (function*) and the find
// function uses a for ... of statement, which is used to iterate the items returned by
// the iterator created by the preceding generator:

const filter = <T>(f: (item: T) => boolean) => {
    return function* (arr: T[]) {
        for (const item of arr) {
            if (f(item)) {
                yield item;
            }
        }
    };
};

const find = <T>(f: (item: T) => boolean) =>(arr: IterableIterator<T>) => {
    for (const item of arr) {
        if (f(item)) {
            return item;
        }
    }
};

// The code snippet uses the compose function from Ramda to compose the return of
// find(isOld) and filter(isLarge). The result is a new function named findLargeOldDog.
// We can use this function to find the Dog instances in the dogs array that matches
// both the isLarge and isOld constraints:

const findLargeOldDog = R.compose(find(isOld), filter(isLarge));
findLargeOldDog(dogs);

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

export default FunctionalProgrammingLaziness;
