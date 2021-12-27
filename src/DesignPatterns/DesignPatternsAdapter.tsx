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

function DesignPatternsAdapter() {
    /**
     * The Target defines the domain-specific interface used by the client code.
     */
    class Target {
        public request(): string {
            return 'The default target\'s behavior.';
        }
    }

    /**
     * The Adaptee contains some useful behavior, but its interface is incompatible
     * with the existing client code. The Adaptee needs some adaptation before the
     * client code can use it.
     */
    class Adaptee {
        public specificRequest(): string {
            return '.eetpadA eht fo roivaheb laicepS';
        }
    }

    /**
     * The Adapter makes the Adaptee's interface compatible with the Target's
     * interface.
     */
    class Adapter extends Target {
        private adaptee: Adaptee;

        constructor(adaptee: Adaptee) {
            super();
            this.adaptee = adaptee;
        }

        public request(): string {
            const result = this.adaptee.specificRequest().split('').reverse().join('');
            return result;
        }
    }

    /**
     * The client code supports all classes that follow the Target interface.
     */

    const target = new Target();
    const targetRequest = target.request();

    const adaptee = new Adaptee();
    const adapteeSpecificRequest = adaptee.specificRequest();

    const adapter = new Adapter(adaptee);
    const adapterRequest = adapter.request();

    return (
        <div>
            <Heading title="Adapter / Structural Design Pattern" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.</Detail>
                    </CardRow>
                </Card>
                <Image alt="Example alt text" src="/images/adapter.png" style={{height: '150px', width: 'auto'}} />
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
/**
 * The Target defines the domain-specific interface used by the client code.
 */
class Target {
    public request(): string {
        return 'Target: The default targets behavior.';
    }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return result;
    }
}

/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCode(target: Target) {
    console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I dont understand it:');
console.log(adaptee.specificRequest());

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex">
                I can work just fine with the Target objects:<br/>
                Target: {targetRequest}<br/>
                <br/>
                The Adaptee class has a weird interface. See, I don't understand it:<br/>
                Adaptee: {adapteeSpecificRequest}<br/>
                <br/>
                But I can work with it via the Adapter:<br/>
                Adapter: (TRANSLATED) {adapterRequest}
                </Box>
            </Box>
        </div>
      );
}

export default DesignPatternsAdapter;
