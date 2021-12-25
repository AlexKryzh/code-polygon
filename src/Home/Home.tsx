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
                </Accordion>
            </AccordionGroup>
        </div>
      );
}

export default Home;
