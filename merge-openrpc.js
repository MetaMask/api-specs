const MetaMaskOpenRPC = require("./openrpc.json");
const fs = require("fs");
const fetch = require("node-fetch");

// fetch, merge and write
fetch("https://raw.githubusercontent.com/ethereum/execution-apis/assembled-spec/refs-openrpc.json")
  .then((res) => {
    return res.json();
  })
  .then((EthereumOpenRPC) => {
    fs.writeFileSync(__dirname + "/src/build/openrpc.json",
      JSON.stringify(
        mergeOpenRPC(MetaMaskOpenRPC, EthereumOpenRPC),
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
      errors: {
        ...first.components.errors,
        ...second.components.errors
      },
      schemas: {
        ...first.components.schemas,
        ...second.components.schemas
      },
      tags: {
        ...first.components.tags,
        ...second.components.tags
      },
      contentDescriptors: {
        ...first.components.contentDescriptors,
        ...second.components.contentDescriptors
      },
      examplePairings: {
        ...first.components.examplePairings,
        ...second.components.examplePairings
      },
      links: {
        ...first.components.links,
        ...second.components.links
      },
      examples: {
        ...first.components.examples,
        ...second.components.examples
      }
    }
  }
};
