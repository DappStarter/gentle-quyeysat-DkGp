require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reward sting coach just only fringe gasp'; 
let testAccounts = [
"0x1bd73f32a854ea7862947d4a7df55c4e90372acbce9ee957f15e749da62da7b0",
"0x96bf5f7a835b907d581d4896e8da1236d7ecc2511b00f37b7ac08c879943afd0",
"0xe7837969bc32de9d986b0146cc3040ee801d0ad96bffbbeff2be23a83d90f96e",
"0xffecad51099730695f6748f2ebd7f3932e96b7b15a914243dbfad6d9b1f573e0",
"0xa2727799a893dcc9f17410fca830f08c05ffef3be18c1a15c56da37592b9bd46",
"0x81d3081c59e56237cd8968818355c4fb50d993c1be73db6bdb23f1a98d37dd1f",
"0x91e81fc9dc3fe52457da37f412e5ad26aa6f6bcc9e029c043efcd97d44a4d89f",
"0x74fb7a5a654db63166e047b6062e683a1f88243626a89b08a48dc7685ce074ec",
"0x36715da59b9c90adb3fa2cd295f14c0f64e817eb5e82295182e2a50cdfccf44d",
"0x66d1320c07ac984caaf7df544d60fef06d34933426ffd388129a86e4d5e1ed50"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


