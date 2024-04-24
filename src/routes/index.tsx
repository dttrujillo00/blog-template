import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { logoutAction, useAuth } from "../auth"
import { LoginForm, ProtectedRoute, SignUpForm } from "../components"
import {  HomePage } from "../pages"


const Routes = () => {

  const authContext = useAuth();

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "/logout",
          action: logoutAction,
        },
      ]
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'login',
      element: <LoginForm />
    },
    {
      path: 'signup',
      element: <SignUpForm />
    },
  ];

  const router = createBrowserRouter([
    ...(!authContext?.session ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Routes