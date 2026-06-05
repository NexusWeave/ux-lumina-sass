# Releasing & Publishing

This project uses an automated pipeline to handle versioning, changelogs, and publishing to NPM.

## Automated Workflow

The release process is managed by two GitHub Actions:

1.  **Release Workflow (`release.yml`):**
    - Runs when changes are pushed to the `master` branch.
    - Uses `standard-version` to:
        - Update the version in `package.json`.
        - Update `CHANGELOG.md`.
        - Create a Git tag.
    - Pushes the changes back to GitHub and creates a release with notes.

2.  **Publish Workflow (`publish.yml`):**
    - Runs when a new GitHub Release is created.
    - Publishes the package to the NPM registry.

## How to Trigger a Release

Just push your changes to the `master` branch. The automated tools will handle the release.

```bash
git push origin master
```

## Trusted Publishing Setup (NPM)

This repository uses **Trusted Publishing (OIDC)** to publish to NPM securely.

### One-time Setup Steps:
1. Log in to [npmjs.com](https://www.npmjs.com/).
2. Go to: `https://www.npmjs.com/package/lumina-sass/settings/publishing`.
3. Under **Trusted Publishers**, click **Add a Publisher**.
4. Select **GitHub Actions** and enter:
   - **GitHub Organization/User:** `NexusWeave`
   - **Repository:** `ux-lumina-sass`
   - **Workflow Filename:** `publish.yml`
   - **Environment Name:** `npm-release`
5. Click **Add Publisher**.

### GitHub Environment Configuration
Create a GitHub Environment named `npm-release` in your repository settings (**Settings > Environments**).

## Versioning Policy
This project uses [Semantic Versioning (SemVer)](https://semver.org/). Version numbers are updated automatically based on [Conventional Commits](https://www.conventionalcommits.org/).
