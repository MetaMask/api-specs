const MetaMaskOpenRPC = require("./openrpc.json");
const fs = require("fs");
const fetch = require("node-fetch");
const mergeOpenRPC = require("./merge-utils");

const getFilteredExecutionAPIs = () => {
  return fetch("https://raw.githubusercontent.com/ethereum/execution-apis/assembled-spec/refs-openrpc.json")
    .then(async (res) => {
      return filterExecutionAPIs(await res.json());
    });
}

// fetch, merge and write
getFilteredExecutionAPIs().then((EthereumOpenRPC) => {
  fs.writeFileSync(__dirname + "/src/build/openrpc.json",
    JSON.stringify(
      mergeOpenRPC(MetaMaskOpenRPC, EthereumOpenRPC),
      null,
      4
    )
  );
});

const unneeded = [
  /eth_signTransaction/,
  /eth_sign/,
  /debug_.*/,
  /engine_.*/
];

const filterExecutionAPIs = (openrpcDocument) => {
  openrpcDocument.methods = openrpcDocument.methods.filter((method) => {
    const matches = unneeded.some((regex) => regex.test(method.name));
    return !matches;
  });
  return openrpcDocument;
};
