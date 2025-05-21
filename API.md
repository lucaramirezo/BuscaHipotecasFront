# API.md - BuscaHipoteca API Integration Documentation

This document outlines the expected API endpoints, request/response structures, and other guidelines for integrating the frontend with the backend API.

## 1. Endpoints Overview

All endpoints are prefixed with `/api`.

**Authentication:**
*   `POST /auth/login`: User login.
*   `POST /auth/register`: User registration (Assumed, not explicitly requested but typical).
*   `POST /auth/logout`: User logout (Assumed, session/token invalidation).

**User Profile:**
*   `GET /user/profile`: Fetch current user's profile.
*   `PUT /user/profile`: Update current user's profile.

**Mortgage Search & Data:**
*   `POST /mortgages/search` or `GET /mortgages?params...`: Search for mortgages based on filter criteria.
    *   *Decision needed: POST for complex filter object or GET with query parameters.*
*   `GET /mortgages/:id`: Get details for a specific mortgage (Assumed).

**User Saved Items:**
*   **Search Drafts:**
    *   `POST /user/searches/draft`: Save a mortgage search draft.
    *   `GET /user/searches/drafts`: Get user's saved search drafts (Assumed).
*   **Saved Mortgages:**
    *   `POST /user/mortgages/save`: Save an individual mortgage.
    *   `DELETE /user/mortgages/:id`: Remove a saved mortgage.
    *   `GET /user/mortgages`: Get all saved mortgages for the user.
*   **Saved Comparisons:**
    *   `POST /user/comparisons`: Save a set of mortgages as a comparison.
    *   `DELETE /user/comparisons/:id`: Remove a saved comparison.
    *   `GET /user/comparisons`: Get all saved comparisons for the user.

## 2. Request/Response Structure Examples (Illustrative)

**Example: `POST /mortgages/search`**

*   **Request Body:**
    ```json
    {
      "basicFilters": {
        "loanAmount": 150000,
        "propertyValue": 200000,
        "loanTermYears": 30,
        "mortgageType": "fixed", // "fixed", "variable", "mixed"
        "netMonthlyIncome": 2500,
        "isFirstHome": true
      },
      "advancedFilters": {
        "financialEntities": ["bank_a_id", "bank_b_id"], // Empty or null for all
        "maxTIN": 3.5, // Percentage
        "maxTAE": 4.0, // Percentage
        "maxMonthlyPayment": 750, // Currency
        "maxOpeningFee": 1.0, // Percentage
        "maxCancellationFee": 0.5, // Percentage
        "requiredProducts": ["payroll", "life_insurance"] // "payroll", "life_insurance", "home_insurance", "credit_card", "pension_plan"
      }
    }
    ```
*   **Response Body (Success - 200 OK):**
    ```json
    {
      "results": [
        {
          "id": "mortgage_123",
          "bankName": "Banco Ejemplo",
          "bankLogoUrl": "/logos/banco_ejemplo.png",
          "mortgageName": "Hipoteca Fija Premium",
          "interestRate": "3.2%", // TIN
          "tae": "3.5%",
          "monthlyPayment": 650,
          "openingFee": "0.5%",
          "cancellationFee": "0.25%",
          "requiredProducts": ["payroll", "home_insurance"],
          "details": { /* ... more details ... */ }
        }
        // ... other mortgage objects
      ],
      "pagination": {
        "currentPage": 1,
        "pageSize": 10,
        "totalResults": 55,
        "totalPages": 6
      }
    }
    ```

**Example: `POST /user/mortgages/save`**

*   **Request Body:**
    ```json
    {
      "mortgageId": "mortgage_123"
    }
    ```
*   **Response Body (Success - 201 Created or 200 OK):**
    ```json
    {
      "status": "success",
      "message": "Mortgage saved successfully.",
      "savedMortgage": {
        "id": "saved_entry_abc",
        "userId": "user_xyz",
        "mortgageId": "mortgage_123",
        "savedAt": "2025-05-13T10:00:00Z"
      }
    }
    ```

## 3. Authentication Flow

*   **Token-Based Authentication (e.g., JWT):**
    1.  User submits credentials to `POST /api/auth/login`.
    2.  Backend validates credentials.
    3.  If valid, backend generates a JWT and returns it in the response body.
        ```json
        {
          "token": "your_jwt_token_here",
          "user": { "id": "user_xyz", "name": "John Doe" }
        }
        ```
    4.  Frontend stores the token (e.g., in `localStorage` or a secure cookie).
    5.  For subsequent authenticated requests, frontend includes the token in the `Authorization` header:
        `Authorization: Bearer your_jwt_token_here`
    6.  Backend verifies the token on each protected endpoint.
*   **Logout:** `POST /api/auth/logout` (if server-side session/token invalidation is needed). Frontend should clear the stored token.

## 4. Error Handling Guidelines

*   **Standard HTTP Status Codes:**
    *   `200 OK`: Successful GET, PUT, PATCH, DELETE.
    *   `201 Created`: Successful POST that creates a resource.
    *   `204 No Content`: Successful request with no response body (e.g., DELETE).
    *   `400 Bad Request`: Invalid request payload, missing parameters, validation errors.
        *   Response body should include details about the errors:
            ```json
            {
              "error": "Validation Error",
              "messages": {
                "loanAmount": "Loan amount must be a positive number.",
                "email": "Invalid email format."
              }
            }
            ```
    *   `401 Unauthorized`: Missing or invalid authentication token.
    *   `403 Forbidden`: Authenticated user does not have permission to access the resource.
    *   `404 Not Found`: Resource not found.
    *   `500 Internal Server Error`: Generic server-side error.
*   **Frontend Error Handling:**
    *   The `api.js` service should catch errors from `fetch` or `axios`.
    *   It can re-throw errors or return a structured error object for Pinia stores/components to handle.
    *   Display user-friendly error messages.
    *   Log detailed errors to the console for debugging.

## 5. Mock Data Structure for Development

(To be used by `api.js` placeholder functions until backend is ready)

**Mock Mortgage:**
```javascript
const mockMortgage = {
  id: `mortgage_${Date.now()}`,
  bankName: "Banco Ficticio",
  bankLogoUrl: "https://via.placeholder.com/100x40?text=BancoLogo",
  mortgageName: "Hipoteca Ejemplo Fija",
  interestRate: "3.0%", // TIN
  tae: "3.25%",
  monthlyPayment: 700,
  openingFee: "0.75%",
  cancellationFee: "0.30%",
  requiredProducts: ["payroll"],
  details: {
    description: "Una hipoteca de prueba con buenas condiciones.",
    maxFinancingPercentage: 80,
    minAge: 18,
    maxAge: 75,
  }
};
```

**Mock Search Results:**
```javascript
const mockSearchResults = (filters) => ({
  results: Array.from({ length: 5 }, (_, i) => ({
    ...mockMortgage,
    id: `mortgage_search_${i}`,
    bankName: `Banco ${String.fromCharCode(65 + i)}`,
    monthlyPayment: 600 + i * 50,
    interestRate: `${(2.5 + i * 0.1).toFixed(2)}%`
  })),
  pagination: {
    currentPage: 1,
    pageSize: 5,
    totalResults: 5,
    totalPages: 1
  }
});
```

**Mock User Profile:**
```javascript
const mockUserProfile = {
  id: "user_dev_1",
  name: "Usuario de Prueba",
  email: "test@example.com",
  preferences: {}
};
```
This structure will help in developing the frontend features independently.
