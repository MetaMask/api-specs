# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/MetaMask/api-specs/compare/v0.4.1...HEAD
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
