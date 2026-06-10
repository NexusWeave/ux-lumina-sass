# Releasing & Publishing
*Last updated: 2026-06-05*

This project utilizes an automated release management system to orchestrate versioning, maintain the changelog, and facilitate publication to the NPM registry.

## Automated Workflow

The release lifecycle is governed by two primary GitHub Actions:

1.  **Release Workflow (`release.yml`):**
    - Triggered upon pushing changes to the `master` branch.
    - Employs `standard-version` to perform the following operations:
        - Increment the version number within `package.json`.
        - Update `CHANGELOG.md` with relevant changes.
        - Generate a corresponding Git tag.
    - Synchronizes with GitHub to create an official release accompanied by detailed release notes.

2.  **Publish Workflow (`publish.yml`):**
    - Initiated upon the creation of a new GitHub Release.
    - Executes the publication of the package to the NPM registry.

## Initiating a Release

To trigger the release process, simply push your verified changes to the `master` branch. The automated infrastructure will manage the subsequent release steps.

```bash
git push origin master
```

## Trusted Publishing (NPM)

Lumina Sass leverages **Trusted Publishing (OIDC)** to ensure secure and verified publication to NPM.

### Configuration Procedure:
1. Authenticate with [npmjs.com](https://www.npmjs.com/).
2. Navigate to: `https://www.npmjs.com/package/lumina-sass/settings/publishing`.
3. Within the **Trusted Publishers** section, select **Add a Publisher**.
4. Opt for **GitHub Actions** and provide the following specifications:
   - **GitHub Organization/User:** `NexusWeave`
   - **Repository:** `ux-lumina-sass`
   - **Workflow Filename:** `publish.yml`
   - **Environment Name:** `npm-release`
5. Confirm by clicking **Add Publisher**.

### GitHub Environment Configuration
Establish a GitHub Environment designated as `npm-release` within your repository settings (**Settings > Environments**).

## Versioning Methodology
This project adheres to [Semantic Versioning (SemVer)](https://semver.org/). Version increments are determined automatically based on [Conventional Commits](https://www.conventionalcommits.org/) standards.
