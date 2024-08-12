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

Run `yarn build` to regenerate the output file: `dist/build/openrpc.json`.

> To view the result, paste that file's contents into [the OpenRPC playground](https://playground.open-rpc.org/).

### Build Process

To build, run:

- `yarn install`, if you haven't setup the repo
- `yarn build`

The build process will:
- filter out methods that are not supported/implemented by MetaMask
- merge wallet methods with execution API methods
- output to `dist` for release

<details>
  <summary>Build and merge summary</summary>
    <div>
	  The build includes the script `merge-openrpc.js`, this script:

		- Loads openrpc.yaml and multichain/openrpc.yaml from the local file system.
		- Fetches the Ethereum OpenRPC JSON spec from a [remote URL](https://raw.githubusercontent.com/ethereum/execution-apis/59e6a6f9947859e8bb41bc63b248aa026b0781bd/refs-openrpc.json) and filters the methods using filterExecutionAPIs.
		- Merges the local MetaMask OpenRPC specification with the Ethereum OpenRPC specification.
		- Adds tags to methods:
			> Adds a tag to each method in the Ethereum OpenRPC specification.
		- Writes out the merged and filtered OpenRPC specifications to temporary files:
			- src/build/openrpc.json.
			- src/build/multichain-openrpc.json.

	These files are then output to the `dist` folder. 
 </div>
</details>

## Deploy
- [On release](RELEASING.md), uploads to npm at `@metamask/api-specs`
- [On release](RELEASING.md), uploads to [GitHub pages](https://metamask.github.io/api-specs/latest/metamask-openrpc.json)

