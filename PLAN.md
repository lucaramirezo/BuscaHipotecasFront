# PLAN.md - BuscaHipoteca Project Plan

## 1. Project Overview and Objectives

**Overview:**
BuscaHipoteca is a web application designed to help users search for, compare, and manage mortgage options from various financial institutions. The platform aims to provide a transparent, user-friendly experience, empowering users to make informed decisions about their mortgage.

**Objectives:**
*   Develop a responsive web application for searching and comparing mortgages.
*   Provide comprehensive filtering options to tailor search results.
*   Allow users to save individual mortgages and comparison sets.
*   Integrate with a backend API to fetch mortgage data and manage user accounts.
*   Offer a clear and intuitive user interface.
*   Ensure data is presented transparently.

## 2. Architecture Diagram (Text-based)

```
+----------------------+     +----------------------+     +----------------------+
|      Frontend        | --> |      Backend API     | --> |      Database        |
| (Vue 3, Vite, Pinia) |     |   (e.g., Node.js,    |     | (e.g., PostgreSQL,  |
|                      |     |    Python/Django,    |     |      MongoDB)        |
| - UI Components      |     |    Java/Spring)      |     |                      |
| - Routing            |     |                      |     | - Mortgage Data      |
| - State Management   |     | - Business Logic     |     | - User Accounts      |
| - API Service        |     | - Data Access        |     | - Saved Searches     |
+----------------------+     +----------------------+     +----------------------+
        ^
        |
+----------------------+
|   External Services  |
| (e.g., Bank APIs,    |
|  Credit Score, etc.) |
+----------------------+
```

## 3. Component Hierarchy and Relationships

```
App.vue
├── Navbar.vue
├── RouterView
│   ├── HomePage.vue
│   │   └── (Sections with BaseButton.vue)
│   ├── ConfigureSearchPage.vue
│   │   └── MortgageFilterForm.vue
│   │       ├── BaseInput.vue
│   │       └── BaseButton.vue
│   ├── SearchResultsPage.vue
│   │   ├── MortgageCard.vue
│   │   │   └── BaseButton.vue
│   │   └── BaseButton.vue (View Comparison)
│   ├── ComparisonPage.vue
│   │   └── MortgageComparisonTable.vue
│   │       └── BaseButton.vue
│   ├── SavedMortgagesPage.vue
│   │   ├── SavedMortgageCard.vue
│   │   │   └── BaseButton.vue
│   │   └── (List of saved comparisons)
│   └── LoginPage.vue
│       ├── BaseInput.vue
│       └── BaseButton.vue
└── Footer.vue
```

**Reusable Components:**
*   `BaseButton.vue`: Generic button.
*   `BaseInput.vue`: Generic input field.
*   `MortgageFilterForm.vue`: Encapsulates search filters.
*   `MortgageCard.vue`: Displays a single mortgage in search results.
*   `MortgageComparisonTable.vue`: Displays side-by-side mortgage comparison.
*   `SavedMortgageCard.vue`: Displays a saved mortgage.

## 4. Data Flow Description

1.  **User Interaction:** User interacts with UI components (e.g., fills a form, clicks a button).
2.  **Component Events:** Components emit events or call actions.
3.  **Pinia Actions:** Actions in Pinia stores are triggered.
    *   These actions may update the store's state.
    *   These actions may call API service functions.
4.  **API Service:** Functions in `api.js` make HTTP requests to the backend API.
5.  **Backend API:** Processes requests, interacts with the database, and returns responses.
6.  **API Response:** The API service receives the response.
7.  **Pinia Mutations/State Update:** Actions update the Pinia store state with the data received from the API or based on user input.
8.  **Component Reactivity:** Components subscribed to store state reactively update their views.
9.  **localStorage:** For persistence of comparison lists and saved mortgages, Pinia store actions will also interact with `localStorage` as a fallback or cache.

**Example Flow (Mortgage Search):**
1.  User fills `MortgageFilterForm.vue` on `ConfigureSearchPage.vue`.
2.  User clicks "Buscar".
3.  `ConfigureSearchPage.vue` calls an action in `searchStore.js` to update filter state and an action in `mortgageStore.js` to trigger the search.
4.  `mortgageStore.js` action calls `searchMortgages(filters)` from `api.js`.
5.  `api.js` sends a request to the backend.
6.  Backend returns a list of mortgages.
7.  `api.js` resolves the promise with the data.
8.  `mortgageStore.js` updates `searchResults` state.
9.  `SearchResultsPage.vue` (listening to `searchResults`) re-renders to display `MortgageCard.vue` components.

## 5. State Management Strategy (Pinia)

*   **`authStore.js`**:
    *   `isLoggedIn`: boolean
    *   `user`: object (user profile)
    *   Actions: `login()`, `logout()`, `fetchProfile()`
*   **`searchStore.js`**:
    *   `filters`: object (basic and advanced search criteria)
    *   Actions: `updateFilters()`, `saveDraft()`, `clearFilters()`
*   **`mortgageStore.js`**:
    *   `searchResults`: array (list of mortgages from search)
    *   `comparisonList`: array (mortgages selected for comparison, max 3-4)
    *   `savedMortgages`: array (individually saved mortgages)
    *   `savedComparisons`: array (sets of saved comparisons)
    *   Actions:
        *   `fetchMortgages(filters)`
        *   `addToComparison(mortgage)`
        *   `removeFromComparison(mortgageId)`
        *   `saveMortgage(mortgage)`
        *   `removeSavedMortgage(mortgageId)`
        *   `saveCurrentComparison(name)`
        *   `removeSavedComparison(comparisonId)`
        *   `loadSavedMortgagesFromAPI()`
        *   `loadSavedComparisonsFromAPI()`
        *   (Actions will also interact with `localStorage` for `comparisonList`, `savedMortgages`, `savedComparisons`)

## 6. Key User Journeys/Flows

1.  **New User Exploring Mortgages:**
    *   Lands on `HomePage.vue`.
    *   Clicks "Buscar mi hipoteca".
    *   Navigates to `ConfigureSearchPage.vue`.
    *   Fills basic filters, clicks "Continuar".
    *   (Optional) Fills advanced filters.
    *   Clicks "Buscar".
    *   Views `SearchResultsPage.vue`.
    *   Adds mortgages to comparison.
    *   Views `ComparisonPage.vue`.
2.  **User Saving a Mortgage:**
    *   On `SearchResultsPage.vue` or `ComparisonPage.vue`.
    *   Clicks "Guardar hipoteca" on a `MortgageCard.vue`.
    *   (If not logged in, prompted to `LoginPage.vue` or registers).
    *   Mortgage is added to `savedMortgages` in `mortgageStore.js` and persisted via API/localStorage.
3.  **User Saving a Comparison:**
    *   On `ComparisonPage.vue` with selected mortgages.
    *   Clicks "Guardar comparación".
    *   (If not logged in, prompted to `LoginPage.vue` or registers).
    *   Comparison is saved with a name to `savedComparisons` in `mortgageStore.js` and persisted via API/localStorage.
4.  **Registered User Viewing Saved Items:**
    *   Logs in via `LoginPage.vue`.
    *   Navigates to `SavedMortgagesPage.vue`.
    *   Views lists of saved mortgages and comparisons.
    *   Can view details, edit, or delete.
5.  **User Login/Registration:**
    *   Clicks login/avatar.
    *   Navigates to `LoginPage.vue`.
    *   Enters credentials or chooses to register.
    *   On successful login, `authStore.js` is updated, and user is redirected.

## 7. Responsive Design Approach

*   **Bootstrap 5 Grid System:** Utilize Bootstrap's responsive grid (`col-xs-`, `col-sm-`, `col-md-`, `col-lg-`, `col-xl-`) for layout structure.
*   **Mobile-First:** Design components and layouts with mobile screens in mind first, then adapt for larger screens.
*   **CSS Media Queries:** Use custom media queries for fine-tuning styles where Bootstrap utilities are insufficient.
*   **Flexible Images and Media:** Ensure images and embedded media are responsive.
*   **Navigation:** Implement a collapsible navbar for mobile devices.
*   **Touch-Friendly:** Ensure buttons and interactive elements have adequate tap targets.
*   **Testing:** Test on various devices and screen sizes using browser developer tools and real devices if possible.
*   **Component-Level Responsiveness:** Design individual components to adapt to different container sizes. For example, `MortgageCard.vue` might stack elements vertically on small screens and horizontally on larger ones. The `MortgageComparisonTable.vue` will need careful consideration for responsiveness, possibly by transposing the table or allowing horizontal scrolling on small screens.
