import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';

function LibrariesBigJs() {

    return (
        <div>
            <Heading title="immutable.js / JS Library" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>
                            <p><a href="https://immutable-js.com/" rel="noreferrer" target="_blank">immutable.js</a> - data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.</p>
                            <p>Immutable.js provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.</p>
                            <p>These data structures are highly efficient on modern JavaScript VMs by using structural sharing via hash maps tries and vector tries as popularized by Clojure and Scala, minimizing the need to copy or cache data.</p>
                        </Detail>
                    </CardRow>
                </Card>
            </Box>
            
            <Editor
                height="200px"
                defaultLanguage="typescript"
                defaultValue={`
import Immutable from 'immutable';
var map1: Immutable.Map<string, number>;
map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
var map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50
                `}
            />
        </div>
      );
}

export default LibrariesBigJs;
