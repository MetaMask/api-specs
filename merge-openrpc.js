const fs = require("fs");
const fetch = require("node-fetch");
const mergeOpenRPC = require("./merge-utils");
const yaml = require("js-yaml");

const MetaMaskOpenRPC = yaml.load(fs.readFileSync(__dirname + "/openrpc.yaml", "utf8"));
const TransportOpenRPC = yaml.load(fs.readFileSync(__dirname + "/multichain/openrpc.yaml", "utf8"));

const getFilteredExecutionAPIs = () => {
  return fetch("https://raw.githubusercontent.com/ethereum/execution-apis/337eec34772dc15228092e032fd299042e1ece99/refs-openrpc.json")
    .then(async (res) => {
      return filterExecutionAPIs(await res.json());
    });
}

// fetch, merge and write
getFilteredExecutionAPIs().then((EthereumOpenRPC) => {
  EthereumOpenRPC.methods.forEach((method) => {
    const ethereumTag = {
      name: "Ethereum API",
      description: "Ethereum Node JSON-RPC method",
    };
    const multichainTag = {
      name: "Multichain API",
      description: "Multichain JSON-RPC method",
    };
    if (method.tags) {
      method.tags.push(ethereumTag, multichainTag);
    } else {
      method.tags = [ethereumTag, multichainTag];
    }
  });
  fs.writeFileSync(__dirname + "/src/build/openrpc.json",
    JSON.stringify(
      mergeOpenRPC(MetaMaskOpenRPC, EthereumOpenRPC),
      null,
      4
    )
  );
  fs.writeFileSync(__dirname + "/src/build/multichain-openrpc.json",
    JSON.stringify(
      TransportOpenRPC,
      null,
      4
    )
  );

});

const unneeded = [
  /eth_signTransaction/,
  /eth_sign/,
  /debug_.*/,
  /engine_.*/,
  /eth_createAccessList/,
  /eth_getBlockReceipts/,
  /eth_maxPriorityFeePerGas/,
  /eth_blobBaseFee/,
];

const filterExecutionAPIs = (openrpcDocument) => {
  openrpcDocument.methods = openrpcDocument.methods.filter((method) => {
    const matches = unneeded.some((regex) => regex.test(method.name));
    return !matches;
  });
  return openrpcDocument;
};
