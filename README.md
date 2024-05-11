# Google Meet Clone

A rudimentary clone of Google Meet built on React and Node which uses P2P connections to stream video and audio. While the users are connected via a video call they can also send text messages to each other.

Please see [anantSinghCross/google-meet-clone-server](https://github.com/anantSinghCross/google-meet-clone-server) for the server implementation.
***
**The live [demo](https://google-meet-clone-client.onrender.com) is hosted on [Render](https://render.com/).**

***
### Libraries Used

* `express` - To create a simple app server ([Why?](#server))
* `socket.io` - To use WebSockets for server.
* `socket.io-client` - To use WebSockets for client.
* `simple-peer` - For establishing P2P connections and streaming of data.
* `tailwindcss` - For styling.

###  Step To Follow For Live Demo

1. Visit [Google Meet Clone](https://google-meet-clone-client.onrender.com).
2. Open another client. *If you want to test it out on the same device you'll need to open another tab in the same browser*.
3. Copy the socket ID of the other user in the form and click on **Call**.
4. Let the other user accept your call from the notification on the bottom right of the screen.
5. Both the video feeds and the chat interface will be visible.

### Architecture (Server and Client)

#### Server
A bare-bones express node server that helps in the handshake required to initiate a P2P connection between 2 clients. That's all it does.

#### Client
I've tried to create the below diagram of the system to demonstrate the handshake process.

And the below diagram demonstrates the P2P connection (after the handshake) that is used by the Peers to stream data.
