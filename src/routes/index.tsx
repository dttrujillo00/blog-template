import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth } from "../auth"
import { LoginForm, ProtectedRoute, SignUpForm } from "../components"
import {  HomePage } from "../pages"


const Routes = () => {

  const authContext = useAuth();
  console.log(authContext?.session)

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomePage />
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