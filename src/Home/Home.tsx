import Typography from 'carbon-react/lib/components/typography';
import { Accordion, AccordionGroup } from 'carbon-react/lib/components/accordion';
import Box from 'carbon-react/lib/components/box';
import './Home.scss';
import Link from 'carbon-react/lib/components/link';

function Home() {

    return (
        <div className="home">
            <Typography variant="h1">Code Playground</Typography>
            <AccordionGroup>
                <Accordion title="Design Patterns" borders="none">
                    <Accordion title="Creational Design Patterns"  borders="none">
                        <Box py={2}>
                            <Link>Factory Method</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Abstract Method</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Builder</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-prototype">Prototype</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-singleton">Singleton</Link>
                        </Box>
                    </Accordion>
                    <Accordion title="Structural Design Patterns"  borders="none">
                        <Box py={2}>
                            <Link href="/design-patterns-adapter">Adapter</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Bridge</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Composite</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-decorator">Decorator</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-facade">Facade</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Flyweight</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Proxy</Link>
                        </Box>
                    </Accordion>
                    <Accordion title="Behavioral Design Patterns" borders="none">
                        <Box py={2}>
                            <Link>Chain of Responsibility</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Command</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-iterator">Iterator</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Mediator</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-memento">Memento</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-observer">Observer</Link>
                        </Box>
                        <Box py={2}>
                            <Link>State</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-strategy">Strategy</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Template Method</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Visitor</Link>
                        </Box>
                    </Accordion>
                </Accordion>
                <Accordion title="React Hooks" borders="none">
                    <Accordion title="Basic Hooks"  borders="none">
                        <Box py={2}>
                            <Link href="/react-hooks-usestate">useState</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-useeffect">useEffect</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-usecontext">useContext</Link>
                        </Box>
                    </Accordion>
                    <Accordion title="Additional Hooks"  borders="none">
                        <Box py={2}>
                            <Link href="/react-hooks-usereducer">useReducer</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-usecallback">useCallback</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-usmemo">useMemo</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-useref">useRef</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-useimperativehandle">useImperativeHandle</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-uselayouteffect">useLayoutEffect</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-usedebugvalue">useDebugValue</Link>
                        </Box>
                    </Accordion>
                </Accordion>
                <Accordion title="Typescript" borders="none">
                    <Box py={2}>
                        <Link href="/typescript-declare">Declare</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-generics">Generics</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-union">Union</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-intersection">Intersection</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-type-vs-interface">Type vs Interface</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-index-signature">Index Signature</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-iterator">Iterator</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-generators">Generators</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-asynchronous-generators">Asynchronous Generators</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-enums">Enums</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-readonly">Readonly</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-tuple">Tuple</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-callable">Callable</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-barrel">Barrel</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-null">Null</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-in">In</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-hoisting">Hoisting</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/typescript-literals">Literals</Link>
                    </Box>
                </Accordion>
                <Accordion title="Functional Programming" borders="none">
                    <Box py={2}>
                        <Link href="/functional-programming-higher-order-functions">Higher-Order Functions</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/functional-programming-laziness">Laziness</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/functional-programming-function-Overloading">Function Overloading</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/functional-programming-composition">Composition</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/functional-programming-partial-application">Partial Application</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/functional-programming-currying">Currying</Link>
                    </Box>
                </Accordion>
                <Accordion title="Web Workers" borders="none">
                    <Box py={2}>
                        <Link href="/webworkers-broadcast-channel-api">Broadcast Channel Api</Link>
                    </Box>
                </Accordion>
                <Accordion title="Libraries" borders="none">
                    <Box py={2}>
                        <Link href="/libraries-bigjs">Big.js</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/libraries-deep-equal">deep-iqual</Link>
                    </Box>
                    <Box py={2}>
                        <Link href="/libraries-immutablejs">immutable.js</Link>
                    </Box>
                </Accordion>
            </AccordionGroup>
        </div>
      );
}

export default Home;
