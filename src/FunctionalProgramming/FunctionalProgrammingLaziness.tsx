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
                            <p>Many functional programming languages feature lazy-evaluated APIs. The idea behind lazy evaluation is that operations are not computed until doing so can no longer be postponed.</p>
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
