import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptRecord() {

    return (
        <div>
            <Heading title="Record / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
interface CatInfo {
    age: number;
    breed: string;
}
    
type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

// const cats: Record<CatName, CatInfo>

                `}
            />
        </div>
      );
}

export default TypescriptRecord;
