# node-red-mp3-r2

A Node-RED node that plays an MP3 file on a Raspberry Pi using the omxplayer.

## Prerequisites

- Node-RED installed on your system
- A Raspberry Pi
- omxplayer installed on your Raspberry Pi

## Installation

You can install the `node-red-mp3-r2` node from within Node-RED, or via the npm package manager:

```bash
npm install node-red-mp3-r2
```

Make sure you have `omxplayer` installed on your Raspberry Pi. If not, you can install it using:

```bash
sudo apt-get update
sudo apt-get install -y omxplayer
```

## Usage

1. Drag the `node-red-mp3-r2` node from the Node-RED palette to your flow.
2. Double-click on the node to open its configuration panel.
3. Enter the file location of the MP3 file in the configuration panel.
4. Click "Done" to save the node configuration.
5. Deploy your flow.

## Node Configuration

- Name (optional): A name for the node.
- File Location: The path to the MP3 file to play.

You can also use messages to pass in the file location. The node will use the message value if it is present, otherwise it will use the value set in the configuration panel.

## Input

- `msg.payload`: The file location of the MP3 to play.

## Status

The node status will reflect the status of the MP3 playback:

- playing: The node is currently playing the MP3 file.
- idle: The node has finished playing the MP3 file and is waiting for the next message.
- error: There was an error while trying to play the MP3 file.

## Example Flow
```
[{"id":"6d0f0a.6df7f8f4","type":"inject","z":"9feaa6e0.8f0db8","name":"","props":[{"p":"payload"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"/path/to/your/file.mp3","payloadType":"str","x":110,"y":120,"wires":[["7b38a3a2.c7c16c"]]},{"id":"7b38a3a2.c7c16c","type":"node-red-mp3-r2","z":"9feaa6e0.8f0db8","name":"","x":320,"y":120,"wires":[[]]}]
```
This flow consists of an inject node that passes the MP3 file path to the mp3-r2 node, which then plays the MP3 file on the Raspberry Pi's audio output.

## License

This project is licensed under the GNU General Public License v3.0. See the LICENSE file for details.
