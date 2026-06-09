
Creating a new release:

This repository uses [Github Actions](https://docs.github.com/en/actions) to release.

1. Go to the [Create Release Pull Request](https://github.com/MetaMask/api-specs/actions/workflows/create-release-pr.yml) workflow on GitHub Actions and click **Run workflow**.

1. Fill in the inputs:
    - **base-branch**: `main` (default)
    - **release-type**: a SemVer bump type — `major`, `minor`, or `patch` (mutually exclusive with `release-version`)
    - **release-version**: a specific version to bump to, e.g. `0.15.0` (mutually exclusive with `release-type`)

1. The workflow will open a Pull Request with version bumps and changelog updates.

1. Review the pull request and merge when ready.

1. Merging into `main` triggers [.github/workflows/publish-release.yml](/.github/workflows/publish-release.yml), which publishes the package to npm and deploys docs to GitHub Pages.
