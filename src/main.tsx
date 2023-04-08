import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Pages
import { Home, Dashboard } from './routes'
// Router
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/dashboard',
        element: <Dashboard/>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
