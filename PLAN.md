# Utviklingsplan

## Milepæler

### 1. Tilgjengelighet og WCAG-kontrastvalidering
- [ ] **Refaktorere fargemixins til å sjekke kontrast mellom bakgrunn og farge**:
    - [ ] `background-color` (src/mix/_utilities.sass)
    - [ ] `theme-colors` (src/mix/_theme-colors.sass)
    - [ ] `link-color` (src/mix/_links.sass)
    - [ ] `base-btn` (src/mix/_buttons.sass)
    - [ ] `alert` (src/mix/_alerts.sass)
    - [ ] `card` (src/mix/_cards.sass)
    - [ ] `apply-global-theme` (src/mix/_global-theme.sass)

### 2. Universell utforming for skriftstørrelser
- [ ] **Validere skriftstørrelse for universell utforming etter skjermstørrelse**:
    - [ ] `validate-font-size` (src/func/_typography.sass)
    - [ ] `assert-accessible-font` (src/mix/_typography.sass)
    - [ ] `fluid-font-size` (src/func/_typography.sass)

### 3. Fullførte leveranser
- [x] **Transition-mixin og testdekning**:
    - [x] Implementere `transition` i `src/mix/_utilities.sass`
    - [x] Skrive tester for kortform og del-egenskaper
    - [x] Oppdatere dokumentasjon
