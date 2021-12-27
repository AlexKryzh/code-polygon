import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';
import Image from 'carbon-react/lib/components/image';

function DesignPatternsSingleton() {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        class Singleton {
            private static instance: Singleton;
        
            /**
             * The Singleton's constructor should always be private to prevent direct
             * construction calls with the "new" operator.
             */
            private constructor() { }
        
            /**
             * The static method that controls the access to the singleton instance.
             *
             * This implementation let you subclass the Singleton class while keeping
             * just one instance of each subclass around.
             */
            public static getInstance(): Singleton {
                if (!Singleton.instance) {
                    Singleton.instance = new Singleton();
                }
        
                return Singleton.instance;
            }
        
            /**
             * Finally, any singleton should define some business logic, which can be
             * executed on its instance.
             */
            public someBusinessLogic() {
                // ...
            }
        }

        const s1 = Singleton.getInstance();
        const s2 = Singleton.getInstance();

        if (s1 === s2) {
            setMessage('Singleton works, both variables contain the same instance.');
        } else {
            setMessage('Singleton failed, variables contain different instances.');
        }
    }, []);

    return (
        <div>
            <Heading title="Singleton / Creational Design Pattern" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.</Detail>
                    </CardRow>
                </Card>
                <Image alt="Example alt text" src="/images/singleton.png" style={{height: '150px', width: 'auto'}} />
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
/**
 * The Singleton class defines the "getInstance" method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
    private static instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the "new" operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}

/**
 * The client code.
 */
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="100px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex">
                    {message}
                </Box>
            </Box>
        </div>
      );
}

export default DesignPatternsSingleton;
