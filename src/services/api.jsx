// src/services/api.jsx
import axios from 'axios'; // Import axios for making HTTP requests

const API_URL = 'your_api_base_url'; // Base URL for the API

// Function to handle Google login
export const googleLogin = (email, password) => {
  // Sends a POST request to the Google login endpoint with email and password
  return axios.post(`${API_URL}/google-login`, { email, password });
};

// Function to fetch the list of items from the 'onebox' endpoint
export const getOneboxList = () => {
  // Sends a GET request to fetch the list
  return axios.get(`${API_URL}/onebox/list`);
};

// Function to fetch a specific thread by its ID
export const getThread = (threadId) => {
  // Sends a GET request to fetch the thread details
  return axios.get(`${API_URL}/onebox/${threadId}`);
};

// Function to delete a specific thread by its ID
export const deleteThread = (threadId) => {
  // Sends a DELETE request to remove the thread
  return axios.delete(`${API_URL}/onebox/${threadId}`);
};

// Function to send a reply to a specific thread
export const sendReply = (threadId, data) => {
  // Sends a POST request to add a reply to the thread
  return axios.post(`${API_URL}/reply/${threadId}`, data);
};
