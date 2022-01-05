import Editor from '@monaco-editor/react';
import Heading from 'carbon-react/lib/components/heading';
import Detail from 'carbon-react/lib/components/detail';
import {
    Card,
    CardRow
  } from 'carbon-react/lib/components/card';
import Box from 'carbon-react/lib/components/box';
import Image from 'carbon-react/lib/components/image';

function WebWorkersBroadcastChannelApi() {

    return (
        <div>
            <Heading title="Broadcast Channel API / Web Workers" />
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="stretch" mb={3}>
                <Card spacing="medium" cardWidth="300px">
                    <CardRow spacing="medium">
                        <Detail>The Broadcast Channel API allows basic communication between browsing contexts (that is, windows, tabs, frames, or iframes) and workers on the same origin.</Detail>
                    </CardRow>
                </Card>
                <Image alt="Broadcast Channel API / Web Workers" src="/images/broadcastchannel.png" style={{height: '300px', width: 'auto'}} />
            </Box>
            
            <Editor
                height="70vh"
                defaultLanguage="typescript"
                defaultValue={`
// Connection to a broadcast channel
const bc = new BroadcastChannel('test_channel');

// Example of sending of a very simple message
bc.postMessage('This is a test message.');

// A handler that only logs the event to the console:
bc.onmessage = function (ev) { console.log(ev); }

// Disconnect the channel
bc.close();

                `}
            />
        </div>
      );
}

export default WebWorkersBroadcastChannelApi;
