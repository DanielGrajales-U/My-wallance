import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserProvider } from './Context/user.context.tsx'
import { ErrorProvider } from './Context/error.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <ErrorProvider>
        <App />
      </ErrorProvider>
    </UserProvider>
  </React.StrictMode>,
)
