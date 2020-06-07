const ERC1400Token = artifacts.require('./ERC1400.sol');

const controller = '0x56000DB2e803D62Df7e9d3E53Ca9d95F0f005d07';

const partition1 = "0x7265736572766564000000000000000000000000000000000000000000000000"; // reserved in hex
const partition2 = "0x6973737565640000000000000000000000000000000000000000000000000000"; // issued in hex
const partition3 = "0x6c6f636b65640000000000000000000000000000000000000000000000000000"; // locked in hex
const partitions = [partition1,partition2,partition3];

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(ERC1400Token, "ERC1400Token", "DAU", 1, [accounts[1]], partitions,{from: accounts[0]});
  console.log('\n   > ERC1400 token deployment: Success -->', ERC1400Token.address);
};
