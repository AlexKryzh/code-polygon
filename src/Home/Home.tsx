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
                            <Link>Prototype</Link>
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
                            <Link>Decorator</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Facade</Link>
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
                            <Link>Iterator</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Mediator</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Memento</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/design-patterns-observer">Observer</Link>
                        </Box>
                        <Box py={2}>
                            <Link>State</Link>
                        </Box>
                        <Box py={2}>
                            <Link>Strategy</Link>
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
                            <Link>useState</Link>
                        </Box>
                        <Box py={2}>
                            <Link>useEffect</Link>
                        </Box>
                        <Box py={2}>
                            <Link>useContext</Link>
                        </Box>
                    </Accordion>
                    <Accordion title="Additional Hooks"  borders="none">
                        <Box py={2}>
                            <Link>useReducer</Link>
                        </Box>
                        <Box py={2}>
                            <Link>useCallback</Link>
                        </Box>
                        <Box py={2}>
                            <Link>useMemo</Link>
                        </Box>
                        <Box py={2}>
                            <Link href="/react-hooks-useref">useRef</Link>
                        </Box>
                        <Box py={2}>
                            <Link>useImperativeHandle</Link>
                        </Box>
                        <Box py={2}>
                            <Link>useLayoutEffect</Link>
                        </Box>
                        <Box py={2}>
                            <Link>useDebugValue</Link>
                        </Box>
                    </Accordion>
                </Accordion>
                <Accordion title="Libraries" borders="none">
                    <Box py={2}>
                    <Link href="/libraries-bigjs">Big.js</Link>
                    </Box>
                </Accordion>
            </AccordionGroup>
        </div>
      );
}

export default Home;
