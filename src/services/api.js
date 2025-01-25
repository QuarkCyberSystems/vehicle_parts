import axios from 'axios'

// Use the Vite env variable, or fall back to '/api/v1'
const baseURL = import.meta.env.VITE_API_BASE_URL || '/api/v1'

const apiClient = axios.create({
  baseURL,
  auth: {
    username: 'erpnextdev',
    password: 'We!c@me!2345'
  },
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
