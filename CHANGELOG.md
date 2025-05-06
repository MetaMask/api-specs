# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.14.0]
### Added
- Add EIP-5792 methods: `wallet_sendCalls`, `wallet_getCallsStatus`, `wallet_getCapabilities` ([#284](https://github.com/MetaMask/api-specs/pull/284))

## [0.13.0]
### Changed
- Add `wallet_createSessionUnsupportedScopesExample` to the multichain spec, given a new error we throw in the wallet_createSession handler when all requested scopes are not supported ([#300](https://github.com/MetaMask/api-specs/pull/300))

## [0.12.0]
### Changed
- **BREAKING:** Add empty sessionProperties values as expected return from wallet_createSession ([#297](https://github.com/MetaMask/api-specs/pull/297))
- Bump minimum Node version to v18.20 ([#294](https://github.com/MetaMask/api-specs/pull/294))

## [0.11.0]
### Removed
- **BREAKING:** Remove `wallet_swapAsset` ([#289](https://github.com/MetaMask/api-specs/pull/289))
  - This is not quite ready for primetime.

## [0.10.17]
### Changed
- modify ordering of methods in `sessionScopes` to satisfy strict API specs testing requirements  ([#287](https://github.com/MetaMask/api-specs/pull/287))

## [0.10.16]
### Changed
- Remove `sessionProperties`, switch `requiredScopes` to `optionalScopes`, and move methods to correct scopes in multichain spec examples ([#285](https://github.com/MetaMask/api-specs/pull/285))

### Fixed
- Fix spec for doc rendering ([#282](https://github.com/MetaMask/api-specs/pull/282))

## [0.10.15]
### Uncategorized
- Fix wallet_createSessionUnsupportedScopesExample results value [#281](https://github.com/MetaMask/api-specs/pull/281))

## [0.10.14]
### Uncategorized
- Update `wallet_createSession` examples ([#279](https://github.com/MetaMask/api-specs/pull/279))
- Fix spec for doc rendering (Part 1) ([#277](https://github.com/MetaMask/api-specs/pull/277))
- Add `wallet_swapAsset` ([#201](https://github.com/MetaMask/api-specs/pull/201))

## [0.10.13]
### Uncategorized
- Add multichain tag ([#275](https://github.com/MetaMask/api-specs/pull/275))

## [0.10.12]
### Uncategorized
- Added wallet_notify + remove everything sessionId related ([#272](https://github.com/MetaMask/api-specs/pull/272))
- Added sessionChanged  ([#271](https://github.com/MetaMask/api-specs/pull/271))
- Added revokeSession + add description to getSession ([#270](https://github.com/MetaMask/api-specs/pull/270))
- Added getSession ([#269](https://github.com/MetaMask/api-specs/pull/269))

## [0.10.11]
### Uncategorized
- fix: update eth spec version to latest ([#267](https://github.com/MetaMask/api-specs/pull/267))
- Update `README.md` ([#251](https://github.com/MetaMask/api-specs/pull/251))

## [0.10.10]
### Uncategorized
- fix: rename multichain methods ([#264](https://github.com/MetaMask/api-specs/pull/264))

## [0.10.9]
### Uncategorized
- Update execution-apis reference ([#262](https://github.com/MetaMask/api-specs/pull/262))

## [0.10.8]
### Uncategorized
- Remove 5203 and 5204 from provider_authorize ([#260](https://github.com/MetaMask/api-specs/pull/260))

## [0.10.7]
### Uncategorized
- fix: remove unused multichain error codes ([#258](https://github.com/MetaMask/api-specs/pull/258))

## [0.10.6]
### Uncategorized
- fix: error codes for caip-25 ([#255](https://github.com/MetaMask/api-specs/pull/255))
- Filter out eth_blobBaseFee ([#254](https://github.com/MetaMask/api-specs/pull/254))
- fix: filter unsupported methods ([#249](https://github.com/MetaMask/api-specs/pull/249))

## [0.10.5]
### Uncategorized
- Fix TypedData schema ([#252](https://github.com/MetaMask/api-specs/pull/252))
- fix: remove unsupported filter types ([#250](https://github.com/MetaMask/api-specs/pull/250))

## [0.10.4]
### Uncategorized
- update wallet_scanQRCode and eth_decrypt ([#247](https://github.com/MetaMask/api-specs/pull/247))

## [0.10.3]
### Uncategorized
- Format wallet_getPermission properly ([#232](https://github.com/MetaMask/api-specs/pull/232))
- fix: personal_sign is 65 bytes long (not 129 bytes) ([#244](https://github.com/MetaMask/api-specs/pull/244))
- added some fixes to the schema ([#245](https://github.com/MetaMask/api-specs/pull/245))

## [0.10.2]
### Uncategorized
- fix: provider_authorize scopes ([#242](https://github.com/MetaMask/api-specs/pull/242))
- fix: change scope to scope string ([#240](https://github.com/MetaMask/api-specs/pull/240))

## [0.10.1]
### Uncategorized
- fix: add caip-27 + fix strings in yaml for multichain ([#238](https://github.com/MetaMask/api-specs/pull/238))

## [0.10.0]
### Uncategorized
- Added Transport OpenRPC Document for the MultiChain API ([#236](https://github.com/MetaMask/api-specs/pull/236))

## [0.9.3]
### Uncategorized
- Fixed npm publish via downgrading action ([#229](https://github.com/MetaMask/api-specs/pull/229))
- Fixed prepack script ([#228](https://github.com/MetaMask/api-specs/pull/228))

## [0.9.2]
### Uncategorized
- Fixed publish release to be on main branch instead ([#226](https://github.com/MetaMask/api-specs/pull/226))

## [0.9.1]
### Uncategorized
- Add npm publish to gh actions workflow ([#224](https://github.com/MetaMask/api-specs/pull/224))

## [0.9.0]
### Uncategorized
- Fixed execution-apis spec version to specific commit + added API Reference docs to README ([#222](https://github.com/MetaMask/api-specs/pull/222))
- remove Snaps methods ([#218](https://github.com/MetaMask/api-specs/pull/218))

## [0.8.4]
### Uncategorized
- Fix eth_requestAccounts example ([#219](https://github.com/MetaMask/api-specs/pull/219))

## [0.8.3]
### Uncategorized
- Fixed eth_accounts example params ([#216](https://github.com/MetaMask/api-specs/pull/216))

## [0.8.2]
### Uncategorized
- small typo correction ([#213](https://github.com/MetaMask/api-specs/pull/213))
- remove files throwing erros ([#211](https://github.com/MetaMask/api-specs/pull/211))

## [0.8.1]
### Uncategorized
- Convert native currency decimal properties non-negative min property to minimum ([#200](https://github.com/MetaMask/api-specs/pull/200))
- Add examples  ([#207](https://github.com/MetaMask/api-specs/pull/207))
- Update restricted text ([#202](https://github.com/MetaMask/api-specs/pull/202))

## [0.8.0]
### Uncategorized
- Update method tags ([#195](https://github.com/MetaMask/api-specs/pull/195))
- Adjust iconUrls param description ([#196](https://github.com/MetaMask/api-specs/pull/196))
- Enabling MetaMask security code scanner ([#188](https://github.com/MetaMask/api-specs/pull/188))
- Remove duplicates ([#194](https://github.com/MetaMask/api-specs/pull/194))
- Update nodemon.json to openrpc.yaml ([#192](https://github.com/MetaMask/api-specs/pull/192))
- Update README.md to use openrpc.yaml ([#191](https://github.com/MetaMask/api-specs/pull/191))

## [0.7.0]
### Uncategorized
- Added yaml conversion to build and converted current json doc to yaml ([#189](https://github.com/MetaMask/api-specs/pull/189))
- Reorder and order MetaMask API entries ([#187](https://github.com/MetaMask/api-specs/pull/187))

## [0.6.2]
### Uncategorized
- Update description (for docs index page) ([#185](https://github.com/MetaMask/api-specs/pull/185))

## [0.6.1]
### Uncategorized
- added snapid + request schemas ([#183](https://github.com/MetaMask/api-specs/pull/183))

## [0.6.0]
### Uncategorized
- Document Snap `wallet_*` methods ([#181](https://github.com/MetaMask/api-specs/pull/181))
- more addEthereumChain spec fixes ([#180](https://github.com/MetaMask/api-specs/pull/180))
- Add info to revokePermissions description ([#178](https://github.com/MetaMask/api-specs/pull/178))

## [0.5.0]
### Uncategorized
- Fix `wallet_addEthereumChain` request ([#174](https://github.com/MetaMask/api-specs/pull/174))
- Changed revokePermissions result type to be null ([#176](https://github.com/MetaMask/api-specs/pull/176))
- Add deprecation label to decryption methods ([#175](https://github.com/MetaMask/api-specs/pull/175))
- Wallet revoke permissions ([#145](https://github.com/MetaMask/api-specs/pull/145))

## [0.4.4]
### Uncategorized
- Add description for index page ([#172](https://github.com/MetaMask/api-specs/pull/172))

## [0.4.3]
### Uncategorized
- Added web3_clientVersion ([#164](https://github.com/MetaMask/api-specs/pull/164))
- build(deps): bump @babel/traverse from 7.20.13 to 7.23.2 ([#170](https://github.com/MetaMask/api-specs/pull/170))
- Edit descriptions ([#166](https://github.com/MetaMask/api-specs/pull/166))
- Doc wallet_scanQRCode ([#167](https://github.com/MetaMask/api-specs/pull/167))

## [0.4.2]
### Uncategorized
- Added eth_requestAccounts ([#163](https://github.com/MetaMask/api-specs/pull/163))
- add new wallet_watchAsset error ([#162](https://github.com/MetaMask/api-specs/pull/162))
- MIP-1 proposed watch asset changes ([#138](https://github.com/MetaMask/api-specs/pull/138))

## [0.4.1]
### Uncategorized
- Fixed permission caveat value + added descriptions ([#160](https://github.com/MetaMask/api-specs/pull/160))

## [0.4.0]
### Uncategorized
- Added custom sendTransaction since we don't support accessList just yet ([#158](https://github.com/MetaMask/api-specs/pull/158))

## [0.3.1]
### Uncategorized
- Fixed schema to better render in the docs side + removed createAccessList ([#156](https://github.com/MetaMask/api-specs/pull/156))

## [0.3.0]
### Uncategorized
- Update README.md ([#141](https://github.com/MetaMask/api-specs/pull/141))
- Fixed watchAsset example image url ([#142](https://github.com/MetaMask/api-specs/pull/142))
- fix duplicate methods in built result ([#143](https://github.com/MetaMask/api-specs/pull/143))
- add link to latest build in readme ([#132](https://github.com/MetaMask/api-specs/pull/132))
- update broken rpcURL for addEthereumChain ([#135](https://github.com/MetaMask/api-specs/pull/135))
- Added a watch command to rebuild on change ([#139](https://github.com/MetaMask/api-specs/pull/139))
- update wallet_watchAsset description to acknowledge the divergence between EIP-747 and our implementation ([#137](https://github.com/MetaMask/api-specs/pull/137))

## [0.2.1]
### Uncategorized
- Update merge-openrpc.js ([#130](https://github.com/MetaMask/api-specs/pull/130))

## [0.2.0]
### Added
- specs for eth_subscribe and eth_unsubscribe ([#127](https://github.com/MetaMask/api-specs/pull/127))
- add eth_signTypedData_v4 ([#123](https://github.com/MetaMask/api-specs/pull/123))

### Changed
- API docs descriptions ([#125](https://github.com/MetaMask/api-specs/pull/125))

## [0.1.0]
### Changed
- Removed unused files ([#115](https://github.com/MetaMask/api-specs/pull/115))
- Changed OpenRPC Document to be one file instead of many ([#114](https://github.com/MetaMask/api-specs/pull/114))

## [0.0.39]
### Uncategorized
- Fixed chain name for addEthereumChain example ([#109](https://github.com/MetaMask/api-specs/pull/109))
- Update metamask-openrpc.json ([#108](https://github.com/MetaMask/api-specs/pull/108))
- Update wallet_addEthereumChain errors ([#106](https://github.com/MetaMask/api-specs/pull/106))
- Changed wallet_watchAsset description to 11 characters ([#105](https://github.com/MetaMask/api-specs/pull/105))

## [0.0.38]
### Fixed
- xdai chain pointing to dead url ([#102](https://github.com/MetaMask/api-specs/pull/102))

## [0.0.37]
### Added
- yarn build to gh pages publish step ([#99](https://github.com/MetaMask/api-specs/pull/99))

## [0.0.36]
### Fixed
- hash pointer for gh-pages action ([#97](https://github.com/MetaMask/api-specs/pull/97))

## [0.0.35]
### Fixed
- Deploy for latest ([#95](https://github.com/MetaMask/api-specs/pull/95))

## [0.0.34]
### Added
- homepage to package.json ([#84](https://github.com/MetaMask/api-specs/pull/84))

## [0.0.33]
### Changed
- publish-release.yml ([#82](https://github.com/MetaMask/api-specs/pull/82))

## [0.0.32]
### Fixed
- automated build release branch ([#80](https://github.com/MetaMask/api-specs/pull/80))

## [0.0.31]
### Added
- link to encoding example to `personal_sign` ([#77](https://github.com/MetaMask/api-specs/pull/77))
- extra publish steps for gh-pages ([#78](https://github.com/MetaMask/api-specs/pull/78))

## [0.0.30]
### Added
- `personal_sign` ([#74](https://github.com/MetaMask/api-specs/pull/74))

## [0.0.29]
### Added
- add ethereum chain to openrpc document ([#71](https://github.com/MetaMask/api-specs/pull/71))

## [0.0.28]
### Added
- feat: add wallet_switchEthereumChain ([#66](https://github.com/MetaMask/api-specs/pull/66))

### Changed
- build(deps): bump ws from 7.4.4 to 7.5.0 ([#67](https://github.com/MetaMask/api-specs/pull/67))

### Fixed
- Fix release automation compatibility ([#69](https://github.com/MetaMask/api-specs/pull/69))

[Unreleased]: https://github.com/MetaMask/api-specs/compare/v0.14.0...HEAD
[0.14.0]: https://github.com/MetaMask/api-specs/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/MetaMask/api-specs/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/MetaMask/api-specs/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/MetaMask/api-specs/compare/v0.10.17...v0.11.0
[0.10.17]: https://github.com/MetaMask/api-specs/compare/v0.10.16...v0.10.17
[0.10.16]: https://github.com/MetaMask/api-specs/compare/v0.10.15...v0.10.16
[0.10.15]: https://github.com/MetaMask/api-specs/compare/v0.10.14...v0.10.15
[0.10.14]: https://github.com/MetaMask/api-specs/compare/v0.10.13...v0.10.14
[0.10.13]: https://github.com/MetaMask/api-specs/compare/v0.10.12...v0.10.13
[0.10.12]: https://github.com/MetaMask/api-specs/compare/v0.10.11...v0.10.12
[0.10.11]: https://github.com/MetaMask/api-specs/compare/v0.10.10...v0.10.11
[0.10.10]: https://github.com/MetaMask/api-specs/compare/v0.10.9...v0.10.10
[0.10.9]: https://github.com/MetaMask/api-specs/compare/v0.10.8...v0.10.9
[0.10.8]: https://github.com/MetaMask/api-specs/compare/v0.10.7...v0.10.8
[0.10.7]: https://github.com/MetaMask/api-specs/compare/v0.10.6...v0.10.7
[0.10.6]: https://github.com/MetaMask/api-specs/compare/v0.10.5...v0.10.6
[0.10.5]: https://github.com/MetaMask/api-specs/compare/v0.10.4...v0.10.5
[0.10.4]: https://github.com/MetaMask/api-specs/compare/v0.10.3...v0.10.4
[0.10.3]: https://github.com/MetaMask/api-specs/compare/v0.10.2...v0.10.3
[0.10.2]: https://github.com/MetaMask/api-specs/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/MetaMask/api-specs/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/MetaMask/api-specs/compare/v0.9.3...v0.10.0
[0.9.3]: https://github.com/MetaMask/api-specs/compare/v0.9.2...v0.9.3
[0.9.2]: https://github.com/MetaMask/api-specs/compare/v0.9.1...v0.9.2
[0.9.1]: https://github.com/MetaMask/api-specs/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/MetaMask/api-specs/compare/v0.8.4...v0.9.0
[0.8.4]: https://github.com/MetaMask/api-specs/compare/v0.8.3...v0.8.4
[0.8.3]: https://github.com/MetaMask/api-specs/compare/v0.8.2...v0.8.3
[0.8.2]: https://github.com/MetaMask/api-specs/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/MetaMask/api-specs/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/MetaMask/api-specs/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/MetaMask/api-specs/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/MetaMask/api-specs/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/MetaMask/api-specs/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/MetaMask/api-specs/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/MetaMask/api-specs/compare/v0.4.4...v0.5.0
[0.4.4]: https://github.com/MetaMask/api-specs/compare/v0.4.3...v0.4.4
[0.4.3]: https://github.com/MetaMask/api-specs/compare/v0.4.2...v0.4.3
[0.4.2]: https://github.com/MetaMask/api-specs/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/MetaMask/api-specs/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/MetaMask/api-specs/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/MetaMask/api-specs/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/MetaMask/api-specs/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/MetaMask/api-specs/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/MetaMask/api-specs/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/MetaMask/api-specs/compare/v0.0.39...v0.1.0
[0.0.39]: https://github.com/MetaMask/api-specs/compare/v0.0.38...v0.0.39
[0.0.38]: https://github.com/MetaMask/api-specs/compare/v0.0.37...v0.0.38
[0.0.37]: https://github.com/MetaMask/api-specs/compare/v0.0.36...v0.0.37
[0.0.36]: https://github.com/MetaMask/api-specs/compare/v0.0.35...v0.0.36
[0.0.35]: https://github.com/MetaMask/api-specs/compare/v0.0.34...v0.0.35
[0.0.34]: https://github.com/MetaMask/api-specs/compare/v0.0.33...v0.0.34
[0.0.33]: https://github.com/MetaMask/api-specs/compare/v0.0.32...v0.0.33
[0.0.32]: https://github.com/MetaMask/api-specs/compare/v0.0.31...v0.0.32
[0.0.31]: https://github.com/MetaMask/api-specs/compare/v0.0.30...v0.0.31
[0.0.30]: https://github.com/MetaMask/api-specs/compare/v0.0.29...v0.0.30
[0.0.29]: https://github.com/MetaMask/api-specs/compare/v0.0.28...v0.0.29
[0.0.28]: https://github.com/MetaMask/api-specs/releases/tag/v0.0.28
