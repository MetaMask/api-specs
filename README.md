# MetaMask Wallet API specification

This repository contains the OpenRPC specification for MetaMask's Wallet JSON-RPC API.
You can view the specs in the following formats:

- [MetaMask developer docs interactive API reference](https://docs.metamask.io/wallet/reference/json-rpc-api/)
- [OpenRPC playground](https://metamask.github.io/api-playground/api-documentation)
- [Latest build](https://metamask.github.io/api-specs/latest/openrpc.json)

[OpenRPC](https://open-rpc.org/) is way to specify JSON-RPC APIs that is versionable,
human-readable, and machine-readable.
It improves the accuracy of documentation, APIs, and clients.

## Contribute

You can contribute to the API specs using the following steps.

> **Note:** These steps are for updating the API specs.
> To make a significant change to the API itself, please submit a
> [MetaMask Improvement Proposal (MIP)](https://github.com/MetaMask/metamask-improvement-proposals/tree/main).

1. Edit the API specs in the `openrpc.yaml` file.
   See the [OpenRPC](https://open-rpc.org/) docs for more information on how to format the specs.
2. If you haven't previously set up the repository:
   1. Install [Node.js](https://nodejs.org) 18
     - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm install` will install the latest version and running `nvm use` will automatically choose the right node version for you.
   2. Install [Yarn](https://yarnpkg.com) v4 via [Corepack](https://github.com/nodejs/corepack?tab=readme-ov-file#how-to-install)
   3. Run `yarn install` to install dependencies and run any required post-install scripts
3. Run `yarn run build` to re-generate the output file: `dist/build/openrpc.json`.
4. To view the result, paste that file's contents into the
   [OpenRPC playground](https://playground.open-rpc.org/).

For information about publishing changes to the interactive API reference in the MetaMask developer
docs, see the
[docs contribution guidelines](https://github.com/MetaMask/metamask-docs/blob/main/CONTRIBUTING.md#update-the-interactive-api-reference).

## Build process

When you build the project, the following happens:

1. The MetaMask-specific API specs `openrpc.yaml` are loaded from the local file system.
2. The [Ethereum Execution API specs](https://github.com/ethereum/execution-apis) are
   fetched from a remote URL and methods not supported/implemented by MetaMask are filtered out.
3. The local MetaMask specs are merged with the Ethereum specs.
4. Each Ethereum method is tagged with the "Ethereum API" tag.
5. The merged and filtered specs are written out to temporary files:
	 - `src/build/openrpc.json`
	 - `src/build/multichain-openrpc.json`
6. These files are output to the `dist` folder and the `src/build` contents are deleted.

## Publishing process

On release, the specs are published to npm at `@metamask/api-specs` and to
[GitHub Pages](https://metamask.github.io/api-specs/latest/metamask-openrpc.json).

For information about publishing to the interactive API reference in the MetaMask developer docs,
see the
[docs contribution guidelines](https://github.com/MetaMask/metamask-docs/blob/main/CONTRIBUTING.md#update-the-interactive-api-reference).
