import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';
import Image from 'carbon-react/lib/components/image';

/**
 * The example class that has cloning ability. We'll see how the values of field
 * with different types will be cloned.
 */
 class Prototype {
    public primitive: any;
    public component!: object;
    public circularReference!: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

function DesignPatternsPrototype() {

    function clientCode() {
        const p1 = new Prototype();
        p1.primitive = 245;
        p1.component = new Date();
        p1.circularReference = new ComponentWithBackReference(p1);
    
        const p2 = p1.clone();
        if (p1.primitive === p2.primitive) {
            console.log('Primitive field values have been carried over to a clone. Yay!');
        } else {
            console.log('Primitive field values have not been copied. Booo!');
        }
        if (p1.component === p2.component) {
            console.log('Simple component has not been cloned. Booo!');
        } else {
            console.log('Simple component has been cloned. Yay!');
        }
    
        if (p1.circularReference === p2.circularReference) {
            console.log('Component with back reference has not been cloned. Booo!');
        } else {
            console.log('Component with back reference has been cloned. Yay!');
        }
    
        if (p1.circularReference.prototype === p2.circularReference.prototype) {
            console.log('Component with back reference is linked to original object. Booo!');
        } else {
            console.log('Component with back reference is linked to the clone. Yay!');
        }
    }

    return (
        <div>
            <Heading title="Prototype / Creational Design Pattern" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.</Detail>
                    </CardRow>
                </Card>
                <Image alt="Prototype / Creational Design Pattern" src="/images/prototype.png" style={{height: '150px', width: 'auto'}} />
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
/**
 * The example class that has cloning ability. We'll see how the values of field
 * with different types will be cloned.
 */
class Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

/**
 * The client code.
 */
function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('Primitive field values have been carried over to a clone. Yay!');
    } else {
        console.log('Primitive field values have not been copied. Booo!');
    }
    if (p1.component === p2.component) {
        console.log('Simple component has not been cloned. Booo!');
    } else {
        console.log('Simple component has been cloned. Yay!');
    }

    if (p1.circularReference === p2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    } else {
        console.log('Component with back reference has been cloned. Yay!');
    }

    if (p1.circularReference.prototype === p2.circularReference.prototype) {
        console.log('Component with back reference is linked to original object. Booo!');
    } else {
        console.log('Component with back reference is linked to the clone. Yay!');
    }
}

clientCode();
                `}
            />
            <Box m={3} p={3} bg="secondary">
                <Box height="170px" bg="primary" color="white" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
                    <button onClick={clientCode}>Run Client Code</button>
                    <div>check the console messages</div>
                </Box>
            </Box>
        </div>
      );
}

export default DesignPatternsPrototype;
