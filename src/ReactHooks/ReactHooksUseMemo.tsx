import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function ReactHooksUseMemo() {
    return (
        <div>
            <Heading title="useMemo / React Hook" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>Description.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="300px"
                defaultLanguage="typescript"
                defaultValue={`
{}
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex">
                    
                </Box>
            </Box>
        </div>
      );
}

export default ReactHooksUseMemo;
