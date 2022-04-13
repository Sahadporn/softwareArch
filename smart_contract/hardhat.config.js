//https://eth-ropsten.alchemyapi.io/v2/81-QkTcxkXw1994-7PeRKaSBK4N1PHpS

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/81-QkTcxkXw1994-7PeRKaSBK4N1PHpS',
      accounts: ['2c364b2a456d6c1bffdeeca0e552fc555e1ed2ab4db03ca1614bb6c164fa6623']
    }
  }
}