# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.2.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v3.2.0...v3.2.1) (2026-06-12)

## [3.2.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v3.1.0...v3.2.0) (2026-06-12)


### Features

* migrate to logical properties and rem units. ([566ab4f](https://github.com/NexusWeave/ux-lumina-sass/commit/566ab4f8851fafec0489a8f1fbba140db2be46db))

### [3.1.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v3.1.0...v3.1.1) (2026-06-12)

## [3.1.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v3.0.1...v3.1.0) (2026-06-12)


### Features

* **generators:** add silent parameter, enforce strict errors, and output utility classes ([2a31e2f](https://github.com/NexusWeave/ux-lumina-sass/commit/2a31e2ffb03db7aa5765a9ef0ada1f13d2d85e46))

### [3.0.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v3.0.0...v3.0.1) (2026-06-12)

## [3.0.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.11.1...v3.0.0) (2026-06-12)


### ⚠ BREAKING CHANGES

* The core initialization API has been completely renamed to use everyday language. The mixin `theme-setup()` is now `apply-global-theme()`, `input-generator()` is now `gen-inputs()`, and `misc-styling` has been renamed to `utilities`.

* adopt descriptive everyday naming conventions for core modules ([7dd2484](https://github.com/NexusWeave/ux-lumina-sass/commit/7dd2484fd5af172ce73d4788c999f651dc42893f))

### [2.11.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.11.0...v2.11.1) (2026-06-11)

## [2.11.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.10.2...v2.11.0) (2026-06-11)


### Features

* **theme:** dynamically generate hover outlines and apply smart contrast to code elements. ([2be3d6b](https://github.com/NexusWeave/ux-lumina-sass/commit/2be3d6b9b8a3db1828b327101ae9e322b796bf6a))


### Bug Fixes

* **alerts:** update alert structure to ensure proper integration with theme components. ([631f8d1](https://github.com/NexusWeave/ux-lumina-sass/commit/631f8d15d487d102d06cac10184402e9f6783229))
* **icons:** correct font generation and map missing icons to restore rendering. ([e0e22f3](https://github.com/NexusWeave/ux-lumina-sass/commit/e0e22f3a36a650c7b90a1b07c80aecae533523e0))
* **typography:** enhance font mapping and stack resolution to improve compatibility. ([b605991](https://github.com/NexusWeave/ux-lumina-sass/commit/b6059916873ca33a602fb65fee08c5af84346a4d))

### [2.10.2](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.10.1...v2.10.2) (2026-06-11)

### [2.10.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.10.0...v2.10.1) (2026-06-11)

## [2.10.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.9.0...v2.10.0) (2026-06-11)


### Features

* enhance theme setup and typography foundations. ([fa0f56a](https://github.com/NexusWeave/ux-lumina-sass/commit/fa0f56a0eef186a82446823d1b33650f0ab4505f))
* **misc:** add icon-style mixin for icon font properties. ([28c881d](https://github.com/NexusWeave/ux-lumina-sass/commit/28c881d4062350d026eb26ee3f12096e22457207))

## [2.9.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.8.0...v2.9.0) (2026-06-11)


### Features

* **assets): add logo and favicon, fix(mix:** update media mixin ([f746f23](https://github.com/NexusWeave/ux-lumina-sass/commit/f746f23ea819213b820778816efd7f33ba8ee08e))
* **core:** implement theme-aware color utilities and alert tokens ([2097d66](https://github.com/NexusWeave/ux-lumina-sass/commit/2097d665d05204d2113c7166d3f4552baaef0433))
* **demo:** update core library and demo site styling ([ccc987d](https://github.com/NexusWeave/ux-lumina-sass/commit/ccc987dfccd554deb28260ee7d8ebf46ff474654))
* **mix:** implement universal theme-aware mixins ([7e6c6eb](https://github.com/NexusWeave/ux-lumina-sass/commit/7e6c6eb56ec980dddd32613de8f70988a7cd29d9))

## [2.8.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.7.1...v2.8.0) (2026-06-10)


### Features

* **config:** modernize project infrastructure and exports. ([b2a6ed0](https://github.com/NexusWeave/ux-lumina-sass/commit/b2a6ed004daf5715b94e2b1681df944add4a156c))
* **test:** modernize testing infrastructure with TypeScript and custom Sass validation. ([7afbcca](https://github.com/NexusWeave/ux-lumina-sass/commit/7afbccacda3f1a003777e5b205afd21fce422fde))


### Bug Fixes

* **config:** restore missing build and dev scripts. ([48d2ce1](https://github.com/NexusWeave/ux-lumina-sass/commit/48d2ce19267d7925341610906cf715c737688d2a))
* **map:** resolve naming conflicts in design tokens. ([5de0eda](https://github.com/NexusWeave/ux-lumina-sass/commit/5de0edaccb780901352ac8328efee25ac4a15bbc))
* **test:** establish robust verification method for public exports. ([e2de4f5](https://github.com/NexusWeave/ux-lumina-sass/commit/e2de4f5e4fb5e5c33d75222c8168eaee7496f95c))
* **test:** remove non-existent .flex-center test and fix test script. ([08c3758](https://github.com/NexusWeave/ux-lumina-sass/commit/08c37583f242bfbac2ca1328c6f30c7d97a61b98))

### [2.7.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.7.0...v2.7.1) (2026-06-09)

## [2.7.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.6.4...v2.7.0) (2026-06-09)


### Features

* **modules:** expose map module publicly to enable direct imports of map utilities. ([87cbf69](https://github.com/NexusWeave/ux-lumina-sass/commit/87cbf698ee6ea22b7cc319118fea814cf917f6c6))

### [2.6.4](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.6.3...v2.6.4) (2026-06-09)

### [2.6.3](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.6.2...v2.6.3) (2026-06-09)

### [2.6.2](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.6.1...v2.6.2) (2026-06-09)

### [2.6.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.5.0...v2.6.1) (2026-06-09)


### Features

* **flexbox:** export flex-items-center utility class to align flex container items to the center. ([6e67347](https://github.com/NexusWeave/ux-lumina-sass/commit/6e6734742e6a87dee0a7bb83b6d257665ac8c358))
* **typo:** resolve fallback font stacks and default system fonts when none are provided. ([ca48b4a](https://github.com/NexusWeave/ux-lumina-sass/commit/ca48b4a58efdb3927232b2a072138e183a609721))


### Bug Fixes

* ensure standard fallback font stack is applied when base font mixin receives no arguments, providing a more consistent and predictable developer experience. ([6f80bec](https://github.com/NexusWeave/ux-lumina-sass/commit/6f80bec0e5241c6668229181389a2462b8616452))

## [2.5.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.4.2...v2.5.0) (2026-06-09)


### Features

* **mix:** add buttons, elements, and misc-styling modules with typography helper. ([e32f487](https://github.com/NexusWeave/ux-lumina-sass/commit/e32f4876ab25aad7042789c3b1ef584cb5ce88c0))

### [2.4.2](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.4.1...v2.4.2) (2026-06-09)

### [2.4.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.3.2...v2.4.1) (2026-06-08)

## [2.4.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.3.2...v2.4.0) (2026-06-08)

### [2.3.2](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.3.1...v2.3.2) (2026-06-08)

### [2.3.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.3.0...v2.3.1) (2026-06-08)


### Bug Fixes

* support optional typography parameters and rename generic font family mixins to match CSS keywords. ([fb3ec0e](https://github.com/NexusWeave/ux-lumina-sass/commit/fb3ec0e69aae9397528a6fc34e820b3dac31a9a6))

## [2.3.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.1.5...v2.3.0) (2026-06-07)


### Features

* add Sass unit testing framework with sass-true. ([fd6991e](https://github.com/NexusWeave/ux-lumina-sass/commit/fd6991e210643d5dbf6548eb4aa7701c2ac062e2))


### Bug Fixes

* move icon font-family and color inside pseudo-element for consistency. ([eaa81e4](https://github.com/NexusWeave/ux-lumina-sass/commit/eaa81e43882cc0f5b3304a48c1d3a32318d4613c))
* resolve bugs in aspect-ratio, icon indentation, and media query helpers. ([007be92](https://github.com/NexusWeave/ux-lumina-sass/commit/007be92e21f0c78ad10b16c18659654e4723c962))

## [2.2.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.1.5...v2.2.0) (2026-06-07)


### Features

* add Sass unit testing framework with sass-true. ([fd6991e](https://github.com/NexusWeave/ux-lumina-sass/commit/fd6991e210643d5dbf6548eb4aa7701c2ac062e2))


### Bug Fixes

* move icon font-family and color inside pseudo-element for consistency. ([eaa81e4](https://github.com/NexusWeave/ux-lumina-sass/commit/eaa81e43882cc0f5b3304a48c1d3a32318d4613c))
* resolve bugs in aspect-ratio, icon indentation, and media query helpers. ([007be92](https://github.com/NexusWeave/ux-lumina-sass/commit/007be92e21f0c78ad10b16c18659654e4723c962))

### [2.1.5](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.1.4...v2.1.5) (2026-06-07)


### Bug Fixes

* update academic icon mappings to bank2 and award. ([d609d4b](https://github.com/NexusWeave/ux-lumina-sass/commit/d609d4baaaba7d4a6437392f8bcd3a9d8dedd33d))

### [2.1.4](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.1.3...v2.1.4) (2026-06-07)


### Bug Fixes

* resolve Sass deprecation warnings and improve input generator validation. ([e0b8dfd](https://github.com/NexusWeave/ux-lumina-sass/commit/e0b8dfde06e2ffad7b2791c284c5122307dc3928))

### [2.1.3](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.1.2...v2.1.3) (2026-06-07)


### Bug Fixes

* correct indentation for font-family in icon-generator mixin. ([dce8815](https://github.com/NexusWeave/ux-lumina-sass/commit/dce881569cdbc29a18c2352584949fab084fffc7))

### [2.1.2](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.1.1...v2.1.2) (2026-06-07)


### Bug Fixes

* resolve build errors and synchronize icon documentation. ([c5cc963](https://github.com/NexusWeave/ux-lumina-sass/commit/c5cc96328112ffb416c0ec76d4a3792b55874cd7))
* set default fallback colour to black for icon-generator mixin. ([8fb25c2](https://github.com/NexusWeave/ux-lumina-sass/commit/8fb25c2b817ac8ffa45f81afcf497931451ee31a))

### [2.1.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.1.0...v2.1.1) (2026-06-06)

## [2.1.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.0.2...v2.1.0) (2026-06-06)


### Features

* update demo assets and style files. ([7227716](https://github.com/NexusWeave/ux-lumina-sass/commit/7227716c7a05f6661a083d70c28409de3f103803))
* update mix source files., ([eea1a14](https://github.com/NexusWeave/ux-lumina-sass/commit/eea1a141ddc3044784bc76163df39ff6dc60c882))

### [2.0.2](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.0.1...v2.0.2) (2026-06-06)


### Bug Fixes

* adjust global wildcard reset in index.sass. ([fbd5f81](https://github.com/NexusWeave/ux-lumina-sass/commit/fbd5f8142a41523a8d2db552110fa35223951626))

### [2.0.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v2.0.0...v2.0.1) (2026-06-06)


### Bug Fixes

* sync flexbox docs with new premade structure and update build scripts. ([a565e7b](https://github.com/NexusWeave/ux-lumina-sass/commit/a565e7be0678b10740206b72ecc31b936dd73f26))

## [2.0.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.13.0...v2.0.0) (2026-06-05)


### ⚠ BREAKING CHANGES

* bump to next major version

### Features

* major overhaul ([a0121af](https://github.com/NexusWeave/ux-lumina-sass/commit/a0121af45c8e8f4fdb29e815cd80ae330ed6d3b5))

## [1.13.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.12.1...v1.13.0) (2026-06-05)


### Features

* release major version 2.0.0 ([9cbb515](https://github.com/NexusWeave/ux-lumina-sass/commit/9cbb51599070c4f4235c6506387dd7bf4d68085b))

### [1.12.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.12.0...v1.12.1) (2026-06-05)

## [1.12.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.11.0...v1.12.0) (2026-06-05)


### Features

* update remaining Sass files after colour conversion., ([62a915e](https://github.com/NexusWeave/ux-lumina-sass/commit/62a915ebf8b28c861c30d4670aa62561a980923c))

## [1.11.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.10.0...v1.11.0) (2026-06-05)


### Features

* replace rgba(..., 1) with rgb() in brand colour definitions. ([a9f1e15](https://github.com/NexusWeave/ux-lumina-sass/commit/a9f1e151df8acdd6e0707060f766a8600bbe09b1))

## [1.10.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.9.0...v1.10.0) (2026-06-05)


### Features

* add tag-theme colour map for article-theme generator. ([2a8ed2b](https://github.com/NexusWeave/ux-lumina-sass/commit/2a8ed2ba11704dae93b69ebdabc291a6ca31f548))

## [1.9.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.8.0...v1.9.0) (2026-06-05)


### Features

* add responsive media‑query helpers and device breakpoints. ([430e62b](https://github.com/NexusWeave/ux-lumina-sass/commit/430e62ba2442936943d8a8adbd802f3aee7d921c))

## [1.8.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.10...v1.8.0) (2026-06-05)


### Features

* add responsive media queries and iPhone device entry. ([8246420](https://github.com/NexusWeave/ux-lumina-sass/commit/824642020c0956983b525b9114f6de0182356996))

### [1.7.10](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.9...v1.7.10) (2026-06-05)

### [1.7.9](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.8...v1.7.9) (2026-06-05)

### [1.7.8](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.7...v1.7.8) (2026-06-05)

### [1.7.7](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.6...v1.7.7) (2026-06-05)

### [1.7.6](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.5...v1.7.6) (2026-06-05)

### [1.7.5](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.4...v1.7.5) (2026-06-05)


### Bug Fixes

* **import:** update internal imports to use mix index. ([2ad8417](https://github.com/NexusWeave/ux-lumina-sass/commit/2ad841780a0f82119aca765a32a4a57b0855cb3c))

### [1.7.4](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.3...v1.7.4) (2026-06-05)

### [1.7.3](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.2...v1.7.3) (2026-06-05)


### Bug Fixes

* **flexbox:** add missing utility class .flex-wrap-row-align-items-start ([510ac13](https://github.com/NexusWeave/ux-lumina-sass/commit/510ac13a317849aef29cbe4f82a59060061794aa))

### [1.7.2](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.1...v1.7.2) (2026-06-05)

### [1.7.1](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.7.0...v1.7.1) (2026-06-05)

## [1.7.0](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.17...v1.7.0) (2026-06-05)


### Features

* **flexbox:** export missing utilities and add alignment class. ([c38369a](https://github.com/NexusWeave/ux-lumina-sass/commit/c38369a43912e8f7b3cf703be2a82da8eb3fe3c4))

### [1.6.17](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.16...v1.6.17) (2026-06-05)


### Bug Fixes

* resolve the issues with media-queries. ([7175b49](https://github.com/NexusWeave/ux-lumina-sass/commit/7175b49a23bbcfae0f22d18f75a6f97f187ed7dc))

### [1.6.16](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.15...v1.6.16) (2026-06-05)


### Bug Fixes

* remove word, excel, external-link and internship icons from source. ([babe3c3](https://github.com/NexusWeave/ux-lumina-sass/commit/babe3c3d97e5d5102958c9a14c4550c0556654f4))

### [1.6.15](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.14...v1.6.15) (2026-06-05)


### Bug Fixes

* align demo with src and expose neutral colors ([ec8d8ed](https://github.com/NexusWeave/ux-lumina-sass/commit/ec8d8ed18c05d6f14b3367c8c6da5b9fb93948b2))

### [1.6.14](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.13...v1.6.14) (2026-06-05)


### Bug Fixes

* resolve Sass import errors and variable dependency issues ([d8e8a44](https://github.com/NexusWeave/ux-lumina-sass/commit/d8e8a44cf01f8e9528614ef8a916284224f601e6))

### [1.6.13](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.12...v1.6.13) (2026-06-05)

### [1.6.12](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.11...v1.6.12) (2026-06-05)

### [1.6.11](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.9...v1.6.11) (2026-06-05)

### [1.6.10](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.9...v1.6.10) (2026-06-05)

### [1.6.9](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.8...v1.6.9) (2026-06-05)

### [1.6.8](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.7...v1.6.8) (2026-06-05)

### [1.6.7](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.6...v1.6.7) (2026-06-05)

### [1.6.6](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.5...v1.6.6) (2026-06-05)


### Bug Fixes

* resolve issue with stylesheet not found. ([8ae2c15](https://github.com/NexusWeave/ux-lumina-sass/commit/8ae2c155d0ea4910ed388d0853b0f5e4e4e19d92))

### [1.6.5](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.4...v1.6.5) (2026-06-05)

### [1.6.4](https://github.com/NexusWeave/ux-lumina-sass/compare/v1.6.3...v1.6.4) (2026-06-05)


### Bug Fixes

* update repository URL to match actual remote ([4351ab3](https://github.com/NexusWeave/ux-lumina-sass/commit/4351ab3ec8c1154675e18e87ab2f7738288e1f25))

### [1.6.3](https://github.com/Krigjo25/lumina-sass/compare/v1.6.0...v1.6.3) (2026-06-05)


### Bug Fixes

* **map:** reorder breakpoint maps to resolve circular dependencies and restore variables. ([38998b3](https://github.com/Krigjo25/lumina-sass/commit/38998b31751c8b05af810adb8e1b0100804e9dc5))

### [1.6.2](https://github.com/Krigjo25/lumina-sass/compare/v1.6.0...v1.6.2) (2026-06-05)


### Bug Fixes

* **map:** reorder breakpoint maps to resolve circular dependencies and restore variables. ([38998b3](https://github.com/Krigjo25/lumina-sass/commit/38998b31751c8b05af810adb8e1b0100804e9dc5))

### [1.6.1](https://github.com/Krigjo25/lumina-sass/compare/v1.6.0...v1.6.1) (2026-06-05)


### Bug Fixes

* **map:** reorder breakpoint maps to resolve circular dependencies and restore variables. ([38998b3](https://github.com/Krigjo25/lumina-sass/commit/38998b31751c8b05af810adb8e1b0100804e9dc5))

## [1.6.0](https://github.com/Krigjo25/lumina-sass/compare/v1.5.0...v1.6.0) (2026-06-04)


### Features

* **mixins:** combine icon-generator updates and base-button mixin. ([c422e4e](https://github.com/Krigjo25/lumina-sass/commit/c422e4e0e1254caa980e844b7e555ea24d8f43bc))

## [1.5.0](https://github.com/Krigjo25/lumina-sass/compare/v1.4.0...v1.5.0) (2026-06-04)


### Features

* **mixins:** add base-button mixin, preserving all existing mixins. ([7e51ef3](https://github.com/Krigjo25/lumina-sass/commit/7e51ef3ee09da8fd98bebd69270a3339326ea4e8))

## [1.4.0](https://github.com/Krigjo25/lumina-sass/compare/v1.3.1...v1.4.0) (2026-06-04)


### Features

* **icons:** add word, excel, and twitter icons. ([455c27f](https://github.com/Krigjo25/lumina-sass/commit/455c27f3c11f9a3757c00e22c1c43d6e04fa6a17))

### [1.3.1](https://github.com/Krigjo25/lumina-sass/compare/v1.3.0...v1.3.1) (2026-06-04)

## [1.3.0](https://github.com/Krigjo25/lumina-sass/compare/v1.2.4...v1.3.0) (2026-06-04)


### Features

* **flexbox:** track column-justify-items mixin. ([89c641e](https://github.com/Krigjo25/lumina-sass/commit/89c641ee58b9ce1aacfa82db1959e88475d7afc7))

### [1.2.4](https://github.com/Krigjo25/lumina-sass/compare/v1.2.3...v1.2.4) (2026-06-04)

### [1.2.3](https://github.com/Krigjo25/lumina-sass/compare/v1.2.2...v1.2.3) (2026-06-04)


### Bug Fixes

* **mixins:** restore accidentally removed figure-and-image mixin. ([3008466](https://github.com/Krigjo25/lumina-sass/commit/3008466ab52238bc6e792fcc0c0d7532f9d3f350))

### [1.2.2](https://github.com/Krigjo25/lumina-sass/compare/v1.2.1...v1.2.2) (2026-06-04)

### [1.2.1](https://github.com/Krigjo25/lumina-sass/compare/v1.2.0...v1.2.1) (2026-06-04)

## [1.2.0](https://github.com/Krigjo25/lumina-sass/compare/v1.1.0...v1.2.0) (2026-06-04)


### Features

* **mixins:** add figure-and-image mixin for consistent media styling. ([8174dcc](https://github.com/Krigjo25/lumina-sass/commit/8174dcc748ed80d4425807d3396f8ab72f248e94))

## [1.1.0](https://github.com/Krigjo25/lumina-sass/compare/v1.0.6...v1.1.0) (2026-06-04)


### Features

* **mixins:** implement dynamic media query mixin with breakpoint map. ([97eb57b](https://github.com/Krigjo25/lumina-sass/commit/97eb57b6dfdb56039e423fe0e04c1357b60ae8aa))

### [1.0.5](https://github.com/Krigjo25/lumina-sass/compare/v1.0.4...v1.0.5) (2026-06-04)

### [1.0.4](https://github.com/Krigjo25/lumina-sass/compare/v1.0.3...v1.0.4) (2026-06-04)

### [1.0.3](https://github.com/Krigjo25/lumina-sass/compare/v1.0.2...v1.0.3) (2026-06-04)

### [1.0.2](https://github.com/Krigjo25/lumina-sass/compare/v1.0.1...v1.0.2) (2026-06-04)

### [1.0.1](https://github.com/Krigjo25/lumina-sass/compare/v1.0.0...v1.0.1) (2026-06-04)

## 1.0.0 (2026-06-04)


### Features

* enable modular usage of flexbox utilities ([f87dad5](https://github.com/Krigjo25/lumina-sass/commit/f87dad52cc5d23ebef800fd6489deb40144668e5))
* implement npm Trusted Publishing and SLSA Provenance ([591a820](https://github.com/Krigjo25/lumina-sass/commit/591a8208f86fdbfc257d19ccc0922db46e909b79))
* initialize lumina-sass repository with indented syntax. ([5a0f74c](https://github.com/Krigjo25/lumina-sass/commit/5a0f74c7263fa23281baa0ae32712cf2f2221e0e))
* reorganize structure, add CI/CD automation, and visual testing suite. ([1785a6e](https://github.com/Krigjo25/lumina-sass/commit/1785a6ec6d42020c62bc31c4a103b225c0a04d2e))
