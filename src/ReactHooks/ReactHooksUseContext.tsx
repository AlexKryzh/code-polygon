import React, {useContext} from 'react';
import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function ReactHooksUseContext() {
    const themes = {
        light: {
          foreground: '#000000',
          background: '#eeeeee'
        },
        dark: {
          foreground: '#ffffff',
          background: '#222222'
        }
    };

    const ThemeContext = React.createContext(themes.light);

    function ThemedButton() {
        const theme = useContext(ThemeContext);
        return (
          <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
          </button>
        );
    }

    function Toolbar() {
        return (
            <div>
            <ThemedButton />
            </div>
        );
    }

    return (
        <div>
            <Heading title="useContext / React Hook" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest MyContext.Provider above the calling component in the tree.</Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
import React, {useContext} from 'react';
const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee'
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222'
    }
};
  
const ThemeContext = React.createContext(themes.light);
  
  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
}
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex">
                    <ThemeContext.Provider value={themes.dark}>
                        <Toolbar />
                    </ThemeContext.Provider>
                </Box>
            </Box>
        </div>
      );
}

export default ReactHooksUseContext;
