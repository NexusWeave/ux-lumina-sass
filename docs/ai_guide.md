# AI Operations Guide for **lumina-sass**

> This guide is designed for the Antigravity AI (or any other automated assistant) involved in the `lumina-sass` project. It integrates project conventions, tool specifications, and policy mandates to ensure that the AI operates with precision, adhering to established project standards and user preferences.

---

## Project Overview
- **Identifier:** `lumina-sass`
- **Objective:** A robust framework for design tokens, mixins, and flexbox utilities within Sass environments.
- **Primary Public Interfaces:** `lumina-sass/flexbox`, `lumina-sass/mix`, `lumina-sass/color` (defined in `package.json`).
- **Core Assets:**
  - `src/_index.sass` – The primary internal entry point.
  - `src/flexbox/_index.sass` – A comprehensive suite of flexbox mixins and utility classes.
  - `src/mix/_contrast.sass` – Automated WCAG contrast ratio verification.
  - `README.md` – The definitive user documentation, maintained in synchronization with export configurations.

---

## Development Environment (User Mandates)
- **Node.js Runtime:** Utilize the latest **Stable LTS** (v24.x) version via `fnm`.
  ```bash
  fnm use lts   # Activates the stable LTS environment
  ```
- **Package Management:** `npm` is the designated package manager for this project.
- **Security Protocols:** All commits must be **GPG-signed** (`git commit -S`). The AI should stage modifications and allow the user to provide the necessary credentials. The `--no-gpg-sign` flag is strictly prohibited.
- **Commit Standards:** Adhere to the `type: description.` format. Every commit message must terminate with a period and provide a technical justification for the change.
- **Python Environment:** If required, initialize a local virtual environment utilizing `python -m venv .venv`.

---

## Implementation Patterns
### Installation
```bash
npm install lumina-sass
```
### Utilizing Public Modules
Within any Sass module:
```sass
@use "lumina-sass/flexbox"
@use "lumina-sass/mix"
```
Invoke utilities as follows:
```sass
.my-center
  @include flexbox.flex-center
  @include mix.assert-contrast($fg, $bg)
```

---

## Primary AI Responsibilities
| Responsibility | Execution Strategy |
|------|-----------------------------|
| **File Modification** | Employ the `replace` tool for targeted, surgical edits or `write_file` for creating new or small files. Ensure all comments and stylistic conventions are preserved. |
| **Staging Modifications** | Execute `git add <file>` following any file modification when preparing for a commit. |
| **Committing Changes** | `git commit -S -m "<Conventional Commit>"`. Articulate the command's purpose prior to execution and verify GPG signing. |
| **Build Execution** | `npm run build`. Ensure the LTS Node environment is active via `fnm`. |
| **Export Verification** | Validate that public imports (e.g., `lumina-sass/flexbox`, `lumina-sass/mix`, `lumina-sass/color`) resolve correctly. |
| **Documentation Maintenance** | Synchronize `README.md` and auxiliary documentation with code modifications, particularly regarding `exports` configurations and new mixins. |
| **Memory Synchronization** | Upon modifying files related to user memory, synchronize changes to `/home/kristoffer/.gemini/GEMINI.md` or project memory as appropriate. |

---

## Export Regulations
- The `package.json` **exports** configuration defines the project's public interface and points directly to the `src/` directory. The AI must:
  1. Verify that only authorized paths are exposed.
  2. Maintain the **module reference table** in `README.md` to reflect current exports.
  3. When introducing new public interfaces, update the `exports` configuration, the README, and the associated documentation.
- Internal structural components must remain encapsulated unless explicit authorization is granted for public exposure.

---

## Testing & Quality Assurance Workflow
1. **Module Import Validation**
   ```bash
   node -e "import 'lumina-sass/flexbox'"   # Expected: Success
   node -e "import 'lumina-sass/mix'"       # Expected: Success
   ```
2. **Build Validation**
   ```bash
   npm run build
   ```
3. **Visual Verification (Optional)** Validate CSS integrity:
   ```bash
   npm run serve   # Initializes the demonstration environment
   ```
4. **Signature Verification**: Subsequent to committing, execute `git log --show-signature -1` to verify GPG authenticity.

---

## Contribution Guidelines
- **Feature Branch Methodology:**
  1. Initialize a dedicated feature branch.
  2. Implement the required modifications.
  3. Execute the prescribed testing protocols.
  4. Commit utilizing a signed Conventional Commit.
  5. Push the branch and initiate a Pull Request.
- **Documentation Standards:** All public modifications must be documented within `README.md` and this guide.
- **Stylistic Consistency:** Adhere to project styling conventions (Sass indented syntax, no trailing whitespace).

---

## Technical Reference (AI)
| Objective | Command |
|---------|---------|
| Activate LTS Node | `fnm use lts` |
| Install dependencies | `npm install` |
| Execute build | `npm run build` |
| Launch demonstration | `npm run serve` |
| Stage file | `git add <path>` |
| Signed Commit | `git commit -S -m "feat: detailed description."` |
| Verify signature | `git log --show-signature -1` |
| Validate valid import | `node -e "import 'lumina-sass/flexbox'"` |

---

## Assistance & Issue Resolution
- In instances of ambiguity, the AI must seek clarification prior to taking action.
- The AI is required to present a comprehensive execution plan before implementing significant modifications.

---

*This guide constitutes an integral part of the project codebase, ensuring that the AI operates with accurate and current information.*
