const MetamaskOpenRPC = require("./metamask-openrpc.json");
const fs = require("fs");
const fetch = require("node-fetch");

// fetch, merge and write
fetch("https://raw.githubusercontent.com/etclabscore/ethereum-json-rpc-specification/master/openrpc.json")
  .then((res) => {
    return res.json();
  })
  .then((EthereumOpenRPC) => {
    fs.writeFileSync(__dirname + "/GENERATED-openrpc.json",
      JSON.stringify(
        mergeOpenRPC(MetamaskOpenRPC, EthereumOpenRPC),
        null,
        4
      )
    );
  });

const mergeOpenRPC = (first, second) => {
  return {
    openrpc: first.openrpc,
    info: first.info,
    methods: [
      ...first.methods,
      ...second.methods
    ],
    components: {
      ...first.components,
      ...second.components
    }
  }
};
