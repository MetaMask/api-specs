# MetaMask API Specs

API Playground: https://metamask.github.io/api-playground/api-documentation
Latest build: https://metamask.github.io/api-specs/latest/openrpc.json

JSON-RPC API provided by MetaMask.

MetaMask dapp developers lack a formal RPC specification. This attempts to document which methods MetaMask supports in a way that's versionable, human-readable and machine-readable. It will improve the accuracy of documentation, API, and clients.

MetaMasks effectiveness as an enterprise-grade application platform depends on its ability to provide a reliable and predictable developer experience.

## Contributing

Edit the `openrpc.json` file.

You can then run `yarn run build` to generate the output file again.

To test the result, you can paste the resulting file from `dist/build/openrpc.json` into [the OpenRPC playground](https://playground.open-rpc.org/) and view the result.

### Build Process
- filter out methods that are not supported/implemented by metamask
- merge wallet methods with execution api methods
- output to `build`


## Deploy
- On release uploads to npm at `@metamask/api-specs`
- On release uploads to github pages at `https://metamask.github.io/api-specs/latest/metamask-openrpc.json`

