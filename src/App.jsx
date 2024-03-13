import React, from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, ErrorPage, Evenement, Wrapper, Login, Register } from './Pages'
<<<<<<< HEAD
import Modals from '../components/Modals'
=======
>>>>>>> 757bd830f6ce06333c1a5d99118fa4938b2d9bf4

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/event',
        element: <Evenement />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
<<<<<<< HEAD
        element: (
          <Modals>
            <Login />
          </Modals>
        ),
      },
      {
        path: '/register',
        element: (
          <Modals>
            <Register />
          </Modals>
        ),
=======
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
>>>>>>> 757bd830f6ce06333c1a5d99118fa4938b2d9bf4
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
