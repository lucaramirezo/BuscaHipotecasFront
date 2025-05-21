# TASKS.md - BuscaHipoteca Development Tasks

## Phase 1: Project Setup and Core Functionality (High Priority)

*   [ ] **Task 1.1 (High):** Initialize Vue 3 project with Vite.
    *   Description: Use Vite to scaffold a new Vue 3 project with JavaScript.
*   [ ] **Task 1.2 (High):** Install and configure core dependencies.
    *   Description: Install `vue-router`, `pinia`, `bootstrap`.
    *   Import Bootstrap CSS globally in `main.js`.
*   [ ] **Task 1.3 (High):** Set up ESLint and Prettier.
    *   Description: Configure linting and formatting rules for consistent code style.
*   [ ] **Task 1.4 (High):** Create basic project structure (folders for views, components, store, services, router).
*   [ ] **Task 1.5 (High):** Implement `Navbar.vue` component.
    *   Priority: High
*   [ ] **Task 1.6 (High):** Implement `Footer.vue` component.
    *   Priority: High
*   [ ] **Task 1.7 (High):** Implement `BaseButton.vue` component.
    *   Priority: High
*   [ ] **Task 1.8 (High):** Implement `BaseInput.vue` component.
    *   Priority: High
*   [ ] **Task 1.9 (High):** Create `HomePage.vue` with static content.
    *   Priority: High
*   [ ] **Task 1.10 (High):** Set up basic routing (`src/router/index.js`) for `HomePage.vue`.
    *   Priority: High
*   [ ] **Task 1.11 (High):** Create `authStore.js` with basic state and actions.
    *   Priority: High
*   [ ] **Task 1.12 (High):** Create `LoginPage.vue` (basic placeholder).
    *   Priority: Medium
*   [ ] **Task 1.13 (High):** Add `/login` route.
    *   Priority: Medium
*   [ ] **Task 1.14 (High):** Create `API.md` documentation.
*   [ ] **Task 1.15 (High):** Create `PLAN.md` documentation.
*   [ ] **Task 1.16 (High):** Create this `TASKS.md` file.

## Phase 2: Search and Filter Implementation

*   [ ] **Task 2.1 (High):** Create `searchStore.js` for filter state.
*   [ ] **Task 2.2 (High):** Create `ConfigureSearchPage.vue` structure.
*   [ ] **Task 2.3 (High):** Implement `MortgageFilterForm.vue` with basic and advanced filter fields.
    *   Description: Include all specified input fields, dropdowns, and buttons.
    *   Priority: High
*   [ ] **Task 2.4 (High):** Integrate `MortgageFilterForm.vue` into `ConfigureSearchPage.vue`.
    *   Priority: High
*   [ ] **Task 2.5 (High):** Implement stepper/progress bar in `ConfigureSearchPage.vue`.
    *   Priority: Medium
*   [ ] **Task 2.6 (High):** Connect filter form inputs to `searchStore.js`.
    *   Priority: High
*   [ ] **Task 2.7 (High):** Create `mortgageStore.js` for search results, comparison, and saved items.
*   [ ] **Task 2.8 (High):** Implement `searchMortgages(filters)` placeholder in `src/services/api.js`.
*   [ ] **Task 2.9 (High):** Implement action in `mortgageStore.js` to call `searchMortgages` and update `searchResults`.
*   [ ] **Task 2.10 (High):** Create `SearchResultsPage.vue` structure.
*   [ ] **Task 2.11 (High):** Implement `MortgageCard.vue` component.
    *   Priority: High
*   [ ] **Task 2.12 (High):** Display `MortgageCard.vue` components in `SearchResultsPage.vue` based on `mortgageStore.searchResults`.
    *   Priority: High
*   [ ] **Task 2.13 (Medium):** Implement "Guardar borrador" functionality in `ConfigureSearchPage.vue` (calls `saveSearchDraft` in `api.js`).
*   [ ] **Task 2.14 (Medium):** Implement "Limpiar filtros" functionality.
*   [ ] **Task 2.15 (High):** Add routes for `/buscar` and `/resultados`.

## Phase 3: Comparison Features

*   [ ] **Task 3.1 (High):** Implement `addToComparison(mortgageId)` action in `mortgageStore.js`.
    *   Description: Add to `comparisonList`, limit to 3-4 items. Persist to localStorage.
*   [ ] **Task 3.2 (High):** Implement `removeFromComparison(mortgageId)` action in `mortgageStore.js`. Persist to localStorage.
*   [ ] **Task 3.3 (High):** Add "Añadir a comparación" button functionality to `MortgageCard.vue`.
*   [ ] **Task 3.4 (High):** Create `ComparisonPage.vue` structure.
*   [ ] **Task 3.5 (High):** Implement `MortgageComparisonTable.vue` component.
    *   Description: Display responsive table, highlight best values, allow removal.
    *   Priority: High
*   [ ] **Task 3.6 (High):** Integrate `MortgageComparisonTable.vue` into `ComparisonPage.vue`, fed by `mortgageStore.comparisonList`.
*   [ ] **Task 3.7 (Medium):** Implement floating action button/header option to "View Comparison" on `SearchResultsPage.vue`.
    *   Description: Visible when `comparisonList` is not empty.
*   [ ] **Task 3.8 (Low):** Implement simple chart visualization for monthly payments in `ComparisonPage.vue`.
*   [ ] **Task 3.9 (Low):** Implement "star/favorite aspects" feature (custom ideal mortgage summary).
*   [ ] **Task 3.10 (Low):** Implement placeholder for "Export comparison as PDF".
*   [ ] **Task 3.11 (High):** Add `/comparar` route.

## Phase 4: User Account and Saving Functionality

*   [ ] **Task 4.1 (High):** Implement `saveMortgage(mortgageId)` action in `mortgageStore.js`.
    *   Description: Calls API, updates `savedMortgages`. Persist to localStorage.
*   [ ] **Task 4.2 (High):** Implement `removeSavedMortgage(mortgageId)` action in `mortgageStore.js`. Persist to localStorage.
*   [ ] **Task 4.3 (High):** Add "Guardar hipoteca" button to `MortgageCard.vue`.
*   [ ] **Task 4.4 (High):** Create `SavedMortgagesPage.vue` structure.
*   [ ] **Task 4.5 (High):** Implement `SavedMortgageCard.vue` component.
*   [ ] **Task 4.6 (High):** Display `SavedMortgageCard.vue` components in `SavedMortgagesPage.vue` for individually saved mortgages.
*   [ ] **Task 4.7 (High):** Implement `saveComparison(name)` action in `mortgageStore.js`.
    *   Description: Calls API, updates `savedComparisons`. Persist to localStorage.
*   [ ] **Task 4.8 (High):** Implement `removeSavedComparison(comparisonId)` action in `mortgageStore.js`. Persist to localStorage.
*   [ ] **Task 4.9 (High):** Allow saving current comparison from `ComparisonPage.vue`.
*   [ ] **Task 4.10 (High):** Display list of saved comparisons in `SavedMortgagesPage.vue`.
*   [ ] **Task 4.11 (Medium):** Implement `loadSavedMortgages()` and `loadSavedComparisons()` actions in `mortgageStore.js` (call API, update store, sync with localStorage).
*   [ ] **Task 4.12 (Medium):** Implement API placeholder functions in `src/services/api.js` for all save/load/remove actions related to user data.
    *   `loginUser(credentials)`
    *   `fetchUserProfile()`
    *   `saveSearchDraft(filters)`
    *   `saveMortgage(mortgageId)`
    *   `removeSavedMortgage(mortgageId)`
    *   `getSavedMortgages()`
    *   `saveComparison(mortgageIds, name)`
    *   `removeSavedComparison(comparisonId)`
    *   `getSavedComparisons()`
*   [ ] **Task 4.13 (Medium):** Implement basic login/logout actions in `authStore.js` (call API, update state).
*   [ ] **Task 4.14 (High):** Add `/guardados` route.
*   [ ] **Task 4.15 (Medium):** Implement persistence of `comparisonList`, `savedMortgages`, `savedComparisons` to `localStorage` in relevant Pinia store actions.
