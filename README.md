# MetaMask API Specs

API Playground: https://metamask.github.io/api-playground/api-documentation

JSON-RPC API provided by MetaMask.

MetaMask dapp developers lack a formal RPC specification. This attempts to document which methods MetaMask supports in a way that's versionable, human-readable and machine-readable. It will improve the accuracy of documentation, API, and clients.

MetaMasks effectiveness as an enterprise-grade application platform depends on its ability to provide a reliable and predictable developer experience.

## To Add Methods

Add new methods as files to the `methods/` folder.

Add those new files to the `metamask-openrpc.json` file.

You can then run `yarn run build` to generate the output file again.

To test the result, you can paste the resulting file from `dist/build/metamask-openrpc.json` into [the OpenRPC playground](https://playground.open-rpc.org/) and view the result.

