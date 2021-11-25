// compile code will go here
const fs = require('fs');
const path = require('path');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts/Inbox.sol');
const inbox = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(inbox, 1).contracts[':Inbox'];
