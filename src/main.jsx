import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './providers/ThemeProvider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './constants/routes.jsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  </StrictMode>,
)
