import { defineStore } from 'pinia';
import { ref } from 'vue';
// import * as api from '@/services/api'; // Assuming your api service

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false);
  const user = ref(null); // To store user profile { id, name, email, etc. }

  // Placeholder for login action
  async function login(credentials) {
    try {
      // const response = await api.loginUser(credentials);
      // For now, simulate successful login:
      console.log('Simulating login with:', credentials);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call

      // Assuming API returns user data and a token
      // user.value = response.user;
      // localStorage.setItem('authToken', response.token); // Store token

      user.value = { id: 'testuser', email: credentials.email, name: 'Test User' }; // Mock user
      isLoggedIn.value = true;
      console.log('Login successful (simulated)', user.value);
      return true;
    } catch (error) {
      console.error('Login failed (simulated):', error);
      isLoggedIn.value = false;
      user.value = null;
      return false;
    }
  }

  // Placeholder for logout action
  function logout() {
    console.log('Logging out (simulated)...');
    user.value = null;
    isLoggedIn.value = false;
    // localStorage.removeItem('authToken'); // Clear token
    // Optionally call an API endpoint to invalidate session/token on server
    console.log('Logout complete (simulated)');
  }

  // Action to check if user is logged in (e.g., on app load)
  // async function checkAuthStatus() {
  //   const token = localStorage.getItem('authToken');
  //   if (token) {
  //     try {
  //       // Optionally verify token with backend or fetch user profile
  //       // const profile = await api.fetchUserProfile();
  //       // user.value = profile;
  //       user.value = { id: 'restoreduser', name: 'Restored User'}; // Mock
  //       isLoggedIn.value = true;
  //     } catch (error) {
  //       logout(); // Token invalid or expired
  //     }
  //   }
  // }

  return {
    isLoggedIn,
    user,
    login,
    logout,
    // checkAuthStatus,
  };
});
