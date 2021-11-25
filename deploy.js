const HdWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HdWalletProvider(
  '', // No ETH here, only test coin/tokens/contracts
  'https://rinkeby.infura.io/v3/4bef705d04c546918828705c14d1a01a',
);

const web3 = new Web3(provider);

async function deploy() {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['I love Marianne'] })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed to', result.options.address);

  provider.engine.stop();
}

deploy()
