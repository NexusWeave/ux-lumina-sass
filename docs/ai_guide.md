# AI Operations Guide for **lumina-sass**

> This document is intended for the Antigravity AI (or any other automated assistant) that contributes to the `lumina-sass` project. It consolidates the repository‑specific conventions, tooling, and policies that enable the AI to work safely, efficiently, and in compliance with the user’s personal rules.

---

## 1️⃣ Project Overview
- **Name:** `lumina-sass`
- **Purpose:** Provides design tokens, mixins, and flexbox utilities for Sass‑based web projects.
- **Primary public entry point:** `lumina-sass/flexbox` (the only sub‑path exported in `package.json`).
- **Main files:**
  - `src/_index.sass` – default entry (re‑exports flexbox).
  - `src/flexbox/_index.sass` – collection of flexbox mixins and utility classes.
  - `README.md` – user‑facing documentation (kept up‑to‑date with export changes).

---

## 2️⃣ Development Environment (User‑defined rules)
- **Node.js version:** Use the latest **Stable LTS** (v24.x) via `fnm`.
  ```bash
  fnm use lts   # activates the stable LTS version
  ```
- **Package manager:** `npm` (default for this repo).
- **GPG signing:** All commits must be **GPG‑signed** (`git commit -S`). The AI should stage changes and let the user provide the pass‑phrase; never use `--no-gpg-sign`.
- **Conventional Commits:** Follow the `type: description.` format, ending with a period. Emphasise *why* a change is made.
- **Python tools:** When needed, create a virtual environment with `python -m venv .venv` (not required for this repo, but noted for future scripts).

---

## 3️⃣ Getting Started (How to use the package)
### Installation
```bash
npm install lumina-sass
```
### Importing the public module
In any Sass file:
```sass
@use "lumina-sass/flexbox"
```
You can now use the flexbox mixins, e.g.:
```sass
.my-center
  @include flexbox.flex-center
```
### Using the library from another project (Node.js side)
If you need the compiled CSS without processing Sass yourself, import the built file directly:
```js
import "lumina-sass/dist/flexbox.css";
```
Most build tools (Webpack, Vite, Rollup) will resolve the path inside `node_modules` automatically.

---

## 4️⃣ Core Tasks for the AI
| Task | How the AI should perform it |
|------|-----------------------------|
| **Edit files** | Use `replace_file_content` for a single contiguous block or `multi_replace_file_content` for multiple non‑adjacent edits. Preserve existing comments and docstrings. |
| **Stage changes** | `git add <file>` after editing. |
| **Commit** | `git commit -S -m "<Conventional Commit>"`. Describe the command before execution and ensure GPG signing is enabled. |
| **Run builds** | `npm run build` (or `npm run dev` if a dev server is needed). Ensure the LTS Node version is active via `fnm`. |
| **Verify exports** | Test that `import 'lumina-sass/flexbox'` works and that importing any other sub‑path fails with `Package subpath ... is not defined`. |
| **Update documentation** | Keep `README.md` and any internal docs in sync with code changes, especially the `exports` field. |
| **Memory synchronization** | Whenever the AI updates a file that is part of the user’s memory, also copy the changes to `/home/kristoffer/Gdrive/Administration/Gemini-Memory-Backup/`. |

---

## 5️⃣ Export Management (Key AI Responsibility)
- The `package.json` **exports** block defines the public API. The AI must:
  1. Ensure only the intended sub‑paths are listed (currently `.` and `./flexbox`).
  2. Update the **module breakdown table** in `README.md` to reflect the exported modules.
  3. When new public modules are added, remember to add them to `exports`, update the README table, and adjust the documentation guide.
- Any attempt to expose internal modules (`color`, `mixins`, `utils`, `map`) must be rejected unless the user explicitly asks for it.

---

## 6️⃣ Testing & Verification Workflow
1. **Local import test**
   ```bash
   node -e "import 'lumina-sass/flexbox'"   # should succeed
   node -e "import 'lumina-sass/utils'"     # should fail
   ```
2. **Build**
   ```bash
   npm run build
   ```
3. **Run demo (optional)** to ensure compiled CSS works:
   ```bash
   npm run serve   # serves the demo folder via http‑server
   ```
4. **Commit verification**: After committing, run `git log --show-signature -1` to confirm the GPG signature is present.

---

## 7️⃣ Contribution Guidelines (for AI and humans)
- **Pull‑request workflow:**
  1. Create a feature branch.
  2. Make the required edits.
  3. Run the verification steps above.
  4. Commit with a signed Conventional Commit.
  5. Push and open a PR.
- **Documentation:** Every public change must be reflected in `README.md` and, if relevant, in this AI guide.
- **Linting / Formatting:** Keep the repo formatted according to the existing style (Sass indentation, no trailing spaces).

---

## 8️⃣ Quick Reference Commands (AI‑friendly)
| Purpose | Command |
|---------|---------|
| Activate LTS Node | `fnm use lts` |
| Install dependencies | `npm install` |
| Build the package | `npm run build` |
| Serve demo (optional) | `npm run serve` |
| Stage a file | `git add <path>` |
| Signed commit (example) | `git commit -S -m "feat: description of change."` |
| Verify signature | `git log --show-signature -1` |
| Test valid import | `node -e "import 'lumina-sass/flexbox'"` |
| Test invalid import | `node -e "import 'lumina-sass/utils'"` |

---

## 9️⃣ Contact & Further Help
- For any ambiguity, the AI should ask the user via a clarifying question before proceeding.
- The AI must always **present a plan before executing** any non‑trivial change (as per user‑global rules).

---

*This guide is version‑controlled along with the rest of the repository, ensuring the AI always has an up‑to‑date reference when working on `lumina-sass`.*
