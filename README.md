# MetaMask API Specs

API Playground: https://metamask.github.io/api-playground/api-documentation
API Reference Docs: https://docs.metamask.io/wallet/reference/json-rpc-api/

Latest build: https://metamask.github.io/api-specs/latest/openrpc.json

JSON-RPC API provided by MetaMask.

MetaMask dapp developers lack a formal RPC specification. This attempts to document which methods MetaMask supports in a way that's versionable, human- and machine-readable. It will improve the accuracy of documentation, API, and clients.

MetaMask's effectiveness as an enterprise-grade application platform depends on its ability to provide a reliable and predictable developer experience.

## Contributing

> Before making any significant changes to the API spec, consider whether to first submit a [MIP](https://github.com/MetaMask/metamask-improvement-proposals/tree/main) and complete the MIP [workflow](https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md).

Edit the `openrpc.yaml` file.

You can then run `yarn run build` to generate the output file again.

To test the result, you can paste the resulting file from `dist/build/openrpc.json` into [the OpenRPC playground](https://playground.open-rpc.org/) and view the result.

### Build Process
- filter out methods that are not supported/implemented by metamask
- merge wallet methods with execution api methods
- output to `build`


## Deploy
- On release uploads to npm at `@metamask/api-specs`
- On release uploads to github pages at `https://metamask.github.io/api-specs/latest/metamask-openrpc.json`

