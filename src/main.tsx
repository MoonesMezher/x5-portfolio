import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AdminContextProvider } from './context/AdminContext.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  </React.StrictMode>,
)
