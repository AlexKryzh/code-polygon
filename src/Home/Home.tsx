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
                            <Link>Observer</Link>
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
            </AccordionGroup>
        </div>
      );
}

export default Home;
