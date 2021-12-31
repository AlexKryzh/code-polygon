import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function TypescriptEnums() {

    return (
        <div>
            <Heading title="Enums / Typescript" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>An enum is a way to organize a collection of related values.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="200px"
                defaultLanguage="typescript"
                defaultValue={`
enum Color {
    Red,
    Green,
    Blue
}

let color = Color.Red;
                `}
            />
        </div>
      );
}

export default TypescriptEnums;
