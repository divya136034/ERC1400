
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
       // eslint-disable-line camelcase
    }
  },
 /** coverage: {
    host: 'localhost',
    network_id: '*', // eslint-disable-line camelcase
    port: 7545,
    gas: 0xfffffffffff,
    gasPrice: 0x01,
},*/
/**ropsten: {
  provider: ropstenProvider,
  network_id: 3, // eslint-disable-line camelcase
  gasPrice: 5000000000,
},*/
  compilers: {
    solc: {
      version: '0.5.11',
      docker: false,
    }
  }
};
