
import EmployeDetails from './components/pages/EmployeDetails'
import './App.css'
import EmployeeMap from './components/pages/EmployeeMap'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/UI/AppLayout'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <EmployeDetails />
        },
        {
          path: '/map',
          element: <EmployeeMap />
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default App
