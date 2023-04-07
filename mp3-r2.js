module.exports = function (RED) {
    const fs = require('fs');
    const { exec } = require('child_process');

    function Mp3R2Node(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.on('input', function (msg) {
            const mp3File = msg.payload;
            if (fs.existsSync(mp3File)) {
                exec(`omxplayer ${mp3File}`, (error, stdout, stderr) => {
                    if (error) {
                        node.error(`Error playing mp3: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        node.warn(`mp3 player stderr: ${stderr}`);
                    }
                    node.send(msg);
                });
            } else {
                node.error('File not found');
            }
        });
    }

    RED.nodes.registerType('mp3-r2', Mp3R2Node);
};
