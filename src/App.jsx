// Importing necessary components and styles
import EmployeDetails from './components/pages/EmployeDetails'
import './App.css'
import EmployeeMap from './components/pages/EmployeeMap'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/UI/AppLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  // Define routes using React Router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />, // Layout for nested routes
      children: [
        {
          path: '/',
          element: <EmployeDetails /> // Home route - displays employee details
        },
        {
          path: '/map',
          element: <EmployeeMap /> // Map route - shows employee locations on Leaflet map
        },
      ]
    },
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
