const fs = require("fs");
const fetch = require("node-fetch");
const mergeOpenRPC = require("./merge-utils");
const yaml = require("js-yaml");

const MetaMaskOpenRPC = yaml.load(fs.readFileSync(__dirname + "/openrpc.yaml", "utf8"));
const TransportOpenRPC = yaml.load(fs.readFileSync(__dirname + "/multichain/openrpc.yaml", "utf8"));

const getFilteredExecutionAPIs = () => {
  return fetch("https://raw.githubusercontent.com/ethereum/execution-apis/ac19b518a2596221cd7cd6421ee3dc654d7ff3b7/refs-openrpc.json")
    .then(async (res) => {
      return filterExecutionAPIs(await res.json());
    });
}

// fetch, merge and write
getFilteredExecutionAPIs().then((EthereumOpenRPC) => {
  EthereumOpenRPC.methods.forEach((method) => {
    const tag = {
      name: "Ethereum API",
      description: "Ethereum Node JSON-RPC method",
    };
    if (method.tags) {
      method.tags.push(tag);
    } else {
      method.tags = [tag];
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
