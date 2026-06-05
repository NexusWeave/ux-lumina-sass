# Releasing & Publishing

This project uses an automated CI/CD pipeline to manage versioning, changelogs, and publishing to NPM.

## Automated Workflow

The release process is handled by two GitHub Actions:

1.  **Release Workflow (`release.yml`):**
    - Triggered when changes are pushed to the `master` branch.
    - Uses `standard-version` to:
        - Bump the version in `package.json`.
        - Generate/update `CHANGELOG.md`.
        - Create a Git tag.
    - Pushes the new tag and changes back to GitHub.
    - Creates a GitHub Release with auto-generated release notes.

2.  **Publish Workflow (`publish.yml`):**
    - Triggered when a new GitHub Release is published.
    - Publishes the package to the NPM registry.
    - Generates SLSA Provenance for the package.

## How to Trigger a Release

Simply push your approved changes to the `master` branch. The automation will take care of the rest.

```bash
git push origin master
```

## Trusted Publishing Setup (NPM)

This repository uses **Trusted Publishing (OIDC)** to publish to NPM without requiring a persistent `NPM_TOKEN` secret.

### One-time Setup Steps:
1. Log in to your account on [npmjs.com](https://www.npmjs.com/).
2. Navigate to the package: `https://www.npmjs.com/package/lumina-sass/settings/publishing`.
3. Under **Trusted Publishers**, click **Add a Publisher**.
4. Select **GitHub Actions** and provide:
   - **GitHub Organization/User:** `NexusWeave`
   - **Repository:** `ux-lumina-sass`
   - **Workflow Filename:** `publish.yml`
   - **Environment Name:** `npm-release`
5. Click **Add Publisher**.

### GitHub Environment Configuration
Ensure you have created a GitHub Environment named `npm-release` in your repository settings (**Settings > Environments**). This environment is required by the `publish.yml` workflow for added security.

## Versioning Policy
This project follows [Semantic Versioning (SemVer)](https://semver.org/). `standard-version` automatically determines the next version based on [Conventional Commits](https://www.conventionalcommits.org/).
