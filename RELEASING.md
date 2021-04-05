
Creating a new release:

This repository uses [Github Actions](https://docs.github.com/en/actions) to release.

1. Start on the `main` branch and on latest
    ```
      git checkout main
      git pull origin main
    ```
1. Create a branch with the correct name: `release-v${version}`

    ex:
    ```
      git checkout -b release-v0.0.1
    ```

1. Push the branch to origin

    ```
      git push origin release-v0.0.1
    ```

1. kicks off [.github/workflows/release-pr.yml](/.github/workflows/release-pr.yml)
1. A [Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) should be created
1. Review pull request
1. Merge PR when ready to release
1. Release kicks off and runs [.github/workflows/release-merge.yml](/.github/workflows/release-merge.yml)
