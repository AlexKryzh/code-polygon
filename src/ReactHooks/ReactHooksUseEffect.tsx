import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';

function ReactHooksUseEffect() {
    return (
        <div>
            <Heading title="useEffect / React Hook" />
                <p>Accepts a function that contains imperative, possibly effectful code.</p>

                <p>Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.</p>

                <p>Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.</p>

                <p>By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.</p>

                <h3>Cleaning up an effect</h3>
                <p>Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function. For example, to create a subscription:</p>



<Editor
                height="180px"
                defaultLanguage="typescript"
                defaultValue={`
useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
        // Clean up the subscription
        subscription.unsubscribe();
    };
});
                `}
            />
<p>The clean-up function runs before the component is removed from the UI to prevent memory leaks. Additionally, if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect. In our example, this means a new subscription is created on every update. To avoid firing an effect on every update, refer to the next section.</p>

<h3>Timing of effects</h3>
<p>Unlike componentDidMount and componentDidUpdate, the function passed to useEffect fires after layout and paint, during a deferred event. This makes it suitable for the many common side effects, like setting up subscriptions and event handlers, because most types of work shouldn’t block the browser from updating the screen.</p>

<p>However, not all effects can be deferred. For example, a DOM mutation that is visible to the user must fire synchronously before the next paint so that the user does not perceive a visual inconsistency. (The distinction is conceptually similar to passive versus active event listeners.) For these types of effects, React provides one additional Hook called useLayoutEffect. It has the same signature as useEffect, and only differs in when it is fired.</p>

<p>Although useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. React will always flush a previous render’s effects before starting a new update.</p>

<h3>Conditionally firing an effect</h3>
<p>The default behavior for effects is to fire the effect after every completed render. That way an effect is always recreated if one of its dependencies changes.</p>

<p>However, this may be overkill in some cases, like the subscription example from the previous section. We don’t need to create a new subscription on every update, only if the source prop has changed.</p>

<p>To implement this, pass a second argument to useEffect that is the array of values that the effect depends on. Our updated example now looks like this:</p>

            <Editor
                height="220px"
                defaultLanguage="typescript"
                defaultValue={`
useEffect(
    () => {
        const subscription = props.source.subscribe();
        return () => {
            subscription.unsubscribe();
        };
    },
    [props.source],
);
                `}
            />
            <p>Now the subscription will only be recreated when props.source changes.</p>

            <h3>Note</h3>

            <p>If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders. Learn more about how to deal with functions and what to do when the array values change too often.</p>

            <p>If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works.</p>

            <p>If you pass an empty array ([]), the props and state inside the effect will always have their initial values. While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model, there are usually better solutions to avoid re-running effects too often. Also, don’t forget that React defers running useEffect until after the browser has painted, so doing extra work is less of a problem.</p>

            <p>We recommend using the exhaustive-deps rule as part of our eslint-plugin-react-hooks package. It warns when dependencies are specified incorrectly and suggests a fix.</p>

            <p>The array of dependencies is not passed as arguments to the effect function. Conceptually, though, that’s what they represent: every value referenced inside the effect function should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.</p>
                        
                        
        </div>
      );
}

export default ReactHooksUseEffect;
