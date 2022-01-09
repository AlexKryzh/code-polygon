import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function FunctionalProgrammingLenses() {

    return (
        <div>
            <Heading title="Lenses / Functional Programming" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p>A lens is just a pair of functions that allow us to get and set a value in an object.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// The interface of a lens could be declared as follows:

interface Lens<T1, T2> {
    get(o: T1): T2;
    set(o: T2, v: T1): T1;
}

// As we can see in the previous code snippet, the lens generic interface declares
// two methods. The get method can be used to get the value of a property of type
// T2 in an object of type T1. The set method can be used for the value of a property
// with type T2 in an object of type T1. The following code snippet implements the
// Lens interface:

const streetLens: Lens<Address, Street> = {
    get: (o: Address) => o.street,
    set: (v: Street, o: Address) => new Address(o.city, v)
};

// The preceding implementation of the Lens interface is named streetLens and it
// allows us to set the value of a property with the Street type in an object of type
// Object. We can use the streetLens object to get the Street instance in an Address
// instance:

const address = new Address(
    "London",
    new Street(1, "rathbone square")
);
const street = streetLens.get(address);

// We can also use the Lens implementation to set the Street instance in the Address
// instance:

const address2 = streetLens.set(
    new Street(
        address.street.num,
        R.toUpper(address.street.name)
    ),
    address
);

// It is important to note that the set method updates the Street instance and returns
// a new Address instance, as opposed to mutating the original Address instance. Now
// that we know the basics of how lenses work, we are going to take a look at some
// of the properties.

// One of the main characteristics of lenses is that they can be composed. As we
// learned in the preceding chapters, function composition is one of the main
// techniques in functional programming, and lenses are just functions, so they can
// be composed in a very similar way. The following code snippet declares a
// higher-order function that allows us to compose two lenses:

function composeLens<A, B, C>(
    ab: Lens<A, B>,
    bc: Lens<B, C>
): Lens<A, C> {
    return {
        get: (a: A) => bc.get(ab.get(a)),
        set: (c: C, a: A) => ab.set(bc.set(c, ab.get(a)), a)
    };
}

// Now that we have declared a higher-order function that allows us to compose
// lenses, we are going to compose two lenses named streetLens and nameLens:

const streetLens: Lens<Address, Street> = {
    get: (o: Address) => o.street,
    set: (v: Street, o: Address) => new Address(o.city, v)
};

const nameLens: Lens<Street, string> = {
    get: (o: Street) => o.name,
    set: (v: string, o: Street) => new Street(o.num, v)
};
const streetNameLens = composeLens(streetLens, nameLens);

// The return of the composeLens function creates a new lens named streetName. The
// new lens can be used to get the name of a Street instance within an Address
// instance:

const address = new Address(
    "London",
    new Street(1, "rathbone square")
);
const streetName = streetNameLens.get(address);

// The lens can also be used to create a new Address instance with an updated Street
// name:

const address2 = streetNameLens.set(R.toUpper(address.street.name), address);

// Many functional programming libraries also implement a function that allows us
// to map a given property in an object to a new value using a lens. The function is
// sometimes named over, but we are going to name it overLens to be clearer:

function overLens<S, A>(
    lens: Lens<S, A>,
    func: (a: A) => A,
    s: S
): S {
    return lens.set(func(lens.get(s)), s)
}

// The preceding function takes a lens as its first argument, a mapping function as
// its second argument, and an object as its third argument. The function uses the
// lens to focus and update one of the properties of the objects using the mapping
// function:

const address = new Address(
    "London",
    new Street(1, "rathbone square")
);
const address2 = overLens(streetNameLens, R.toUpper, address);

// As you can see, generating new versions of immutable objects using lenses can
// be much less verbose and tedious than using standard property accessors and
// class constructors. Now that we know the basics about lenses, we are going to
// implement some lenses again. The previous implementation was simplified to
// facilitate understanding. This time however, we are going to implement lenses in
// a way that is closer to the implementation of some popular libraries such as
// Ramda.

// This time, we are going to declare two functions that are used as a getter and a
// setter. The function that is used as a getter is going to implement an interface
// named Prop. On the other hand, the function used as a setter is going to
// implement an interface named Assoc. The signature of the Prop and Assoc interfaces
// appears as follows:

type Prop<T, K extends keyof T> = (o: T) => T[K];
type Assoc<T, K extends keyof T> = (v: T[K], o: T) => T;

// The following code snippet declares functions that implement the Prop and Assoc
// interfaces. Both implementations are used to access a property named street in an
// object of type Address:

const propStreet: Prop<Address, "street"> = (o: Address) => o.street;
const assocStreet: Assoc<Address, "street"> = (v: Address["street"], o: Address) => {
    return new Address(o.city, v);
};

// One of the main differences in the new implementation is that we are going to
// declare a higher-order function named lens, and we are going to use it to generate
// a lens instance. The lens function takes two functions, a getter and a setter, which
// implement the Prop and Assoc interfaces accordingly. The lens function then
// returns an implementation of the Lens interface:

const lens = <T1, K extends keyof T1>(
    getter: Prop<T1, K>,
    setter: Assoc<T1, K>,
): Lens<T1, T1[K]> => {
    return {
        get: (obj: T1) => getter(obj),
        set: (val: T1[K], obj: T1) => setter(val, obj),
    };
}

// At this point, we can invoke the lens function using the getter function, propStreet,
// and the setter function, assocStreet, that we declared previously:

const streetLens = lens(propStreet, assocStreet);

// Another significant difference is that the new implementation uses two more
// functions, named view and set, as the getter and setter respectively. Both the view
// and set functions take a lens instance:

const view = <T1, T2>(lens: Lens<T1, T2>, obj: T1) => lens.get(obj);
const set = <T1, K extends keyof T1>(
    lens: Lens<T1, T1[K]>,
    val: T1[K],
    obj: T1
) => lens.set(val, obj);

// The preceding functions use the lens get and set methods internally. However, we
// will use the view and set functions instead. The following code snippet
// demonstrates how to use the view function to get the Street instance within an
// Address instance:

const address = new Address(
    "London",
    new Street(1, "rathbone square")
);
const street = view(streetLens, address);

// The following code snippet demonstrates how to use the set function to set the
// value of the Street instance within an Address instance:

const address2 = set(
    streetLens,
    new Street(
        address.street.num,
        R.toUpper(address.street.name)
    ),
    address
);
                `}
            />
        </div>
      );
}

export default FunctionalProgrammingLenses;
