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
});

const unneeded = [
  /eth_signTransaction/,
  /eth_sign/,
  /debug_.*/,
  /engine_.*/,
  /eth_createAccessList/
];

const filterExecutionAPIs = (openrpcDocument) => {
  openrpcDocument.methods = openrpcDocument.methods.filter((method) => {
    const matches = unneeded.some((regex) => regex.test(method.name));
    return !matches;
  });
  return openrpcDocument;
};
