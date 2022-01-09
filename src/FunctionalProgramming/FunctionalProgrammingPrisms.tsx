import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function FunctionalProgrammingPrisms() {

    return (
        <div>
            <Heading title="Prisms / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>Prisms are almost identical to lenses. We can think about a prism as a kind of lens that allows us to get and set an optional property in an object. The most significant difference between lenses and prisms is that prisms can work with optional types.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// The following code snippet declares the Prism interface. As we can see, the Prism
// interface is very similar to the Lens interface. However, the get method returns an
// optional type, Maybe<T>:

type Maybe<T> = T | null;
interface Prism<T1, T2> {
    get(o: T1): Maybe<T2>,
    set(a: T2, o: T1): T1;
}

// Just like lenses, prisms can be composed. The following code snippet declares a
// higher-order function that allows us to compose two prisms:

function composePrism<A, B, C>(ab: Prism<A, B>, bc: Prism<B, C>): Prism<A, C> {
    return {
        get: (a: A) => {
            const b = ab.get(a)
            return b == null ? null : bc.get(b)
        },
        set: (c: C, a: A) => {
            const b = ab.get(a)
            return b == null ? a : ab.set(bc.set(c, b), a)
        }
    }
}

// The preceding function takes two prisms, ab with type Prism<A, B>, and bc with
// type Prism<B, C>, and returns the composition of both prisms with type Prism<A, C>.
// Prisms also allow us to implement a function that allows us to map a property
// given an object and a prism. The function is usually named over in real-world
// libraries but, just as we did in the section about lenses, we are going to name it
// overPrism for clarity:

function overPrism<S, A>(
    prism: Prism<S, A>,
    func: (a: A) => A,
    s: S
): S {
    const a = prism.get(s)
    return a ? prism.set(func(a), s) : s
}

// In the preceding snippet, we have declared the main building blocks required to
// work with prisms, including the Prism interface and the composePrism and overPrism
// functions. In the following section, we are going to demonstrate how to use a
// prism named firstCharacterPrism to focus on the first character of an optional string.
// The code snippet also declares a prism to access the street property in an Address
// instance and the name property in a Street instance.

// The composePrism is then used to compose the three firstCharacterPrism, streetPrism,
// and namePrism prisms into a new prism named streetNameFirstCharater. Finally, the
// overPrism function is used to map the value selected by streetNameFirstCharacter
// using the R.toUpper function. The result is a new instance of Address that contains a
// new instance of Street with a capitalized name. If the name is null, the new Street
// instance will contain null as its name:

const firstCharacterPrism: Prism<string, string> = {
    get: s => s ? s.substring(0, 1) : null,
    set: (a, s) => s.length ? a + s.substring(1) : ""
}

const streetPrism: Prism<Address, Street> = {
    get: (o: Address) => o.street,
    set: (v: Street, o: Address) => new Address(o.city, v)
};

const namePrism: Prism<Street, string> = {
    get: (o: Street) => o.name,
    set: (v: string, o: Street) => new Street(o.num, v)
};

const address = new Address(
    "London",
    new Street(1, "rathbone square")
);

const streetNameFirstCharacterPrism = composePrism(
    composePrism(streetPrism, namePrism),
    firstCharacterPrism
);

const address2 = overPrism(streetNameFirstCharacterPrism, R.toUpper, address);

// Prisms are also useful when we want to work with other kinds of optional types,
// such as discriminated unions like the Either type:

type Either<T1, T2> = T1 | T2;

type Domicile = Either<
    { type: "office", address: Address },
    { type: "personal", address: string }
>;

const addressPrism: Prism<Domicile, Address> = {
    get: d => d.type === "office" ? d.address : null,
    set: (address, d) => d.type === "office" ? { type: "office", address } : d
}

// The preceding code snippet declares an optional type named Either and a type
// named Domicile, which uses the Either type to declare the union of two types. The
// code snippet also declares a prism named addressPrism that allows us to get or set
// the property address in an object of type Domicile. The property address can either
// be a string or an Address instance, and the addressPrism can handle both cases, as
// demonstrated by the following code snippet:

const address = new Address(
    "London",
    new Street(1, "rathbone square")
);

const domicile1: Domicile = { type: "office", address: address };
const domicile2: Domicile = { type: "personal", address: "23 high street" };

const address1 = addressPrism.get(domicile1);
const address2 = addressPrism.get(domicile2);

// At this point, we should understand the main characteristics of both lenses and
// prisms. In this chapter, we have created our own implementations of lenses and
// prisms because our main goal was to understand how they work. However, using
// a custom implementation is not recommended for professional software
// development projects. In Chapter 10, Real-World Functional Programming, we
// will learn how to use production-ready optics with Ramda.

                `}
            />
        </div>
      );
}

export default FunctionalProgrammingPrisms;
