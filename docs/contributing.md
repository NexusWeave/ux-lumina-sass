# Contributing to Lumina SASS
Thank you for contributing to Lumina SASS. Follow these steps to submit your contributions via GitHub forks and Pull Requests.

## Workflow Overview
1. Fork the repository.
2. Clone your fork locally.
3. Create a feature branch.
4. Implement changes and add tests.
5. Verify tests pass cleanly.
6. Commit using conventional commit messages.
7. Push to your fork and submit a Pull Request.

## Step-by-Step Guide
### 1. Fork & Clone
Fork `ux-lumina-sass` on GitHub and clone your fork:

```bash
git clone https://github.com/<your-username>/ux-lumina-sass.git
cd ux-lumina-sass
npm install
```

### 2. Create a Feature Branch
Create a descriptive branch for your work:

```bash
git checkout -b feature/your-feature-name
```

### 3. Development Guidelines
- **Sass Indented Syntax:** Write stylesheets using `.sass` indented syntax.
- **Parametric Mixins:** Set default mixin parameters to safe defaults (`false` or `null`) when adding optional behavior.
- **Module Aliases:** Use standard `@use` aliases (`l-mix`, `l-flex`, `l-colors`, `l-map`, `l-func`).

### 4. Testing & Quality Assurance
Run the test suite to ensure all unit tests pass:

```bash
npx vitest run test/sass.spec.ts
```

### 5. Submit Pull Request & Request Reviews
Commit your changes, push to your fork, and open a Pull Request against `master`:

```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

1. Open a Pull Request on the main repository and describe your changes.
2. Under the **Reviewers** section on the right side of your Pull Request, assign/request reviewers from the maintainers team. This triggers notifications so the team can review and merge your contribution promptly.

## Contact & Questions
For questions regarding contributions, contact Kristoffer at **krigjo25@outlook.com**.
