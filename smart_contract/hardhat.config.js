require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/L-jL_NWrPPCDN44ELtR-KACy_7j0s_72',
      accounts: ['036aa3cdbd05ac73fad4aa5ab54b8022a559119532815a50db92e869fc2df574'],
    },
    // rinkeby: {
    //   url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    //   accounts: ['']
    // }
  },

};