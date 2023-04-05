const MetaMaskOpenRPC = require("./openrpc.json");
const fs = require("fs");
const fetch = require("node-fetch");


const getFilteredExecutionAPIs = () => {
  return fetch("https://raw.githubusercontent.com/ethereum/execution-apis/assembled-spec/refs-openrpc.json")
    .then(async (res) => {
      return filterExecutionAPIs(await res.json());
    })
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
})

const unneeded = [
  /eth_signTransaction/,
  /eth_sign/,
  /debug_.*/,
  /engine_.*/
];

const filterExecutionAPIs = (openrpcDocument) => {
  openrpcDocument.methods = openrpcDocument.methods.filter((method) => {
    const matches = unneeded.some((regex) => regex.test(method.name))
    return !matches;
  });
  return openrpcDocument;
}

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
