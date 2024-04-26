import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAuth } from "../auth"
import { LoginForm, ProtectedRoute, SignUpForm } from "../components"
import { EditArticlePage, HomePage, NotAuthenticated } from "../pages"


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
          path: "edit-article/:article_id",
          element: <EditArticlePage />
        },
      ]
    },
    {
      path: '*',
      element: <Navigate to={'/'} />,
    }
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <NotAuthenticated />,
      children: [
        {
          path: 'login',
          element: <LoginForm />
        },
        {
          path: 'signup',
          element: <SignUpForm />
        },
      ]
    },
    {
      path: '*',
      element: <Navigate to={'/login'} />,
    }
  ];

  const router = createBrowserRouter([
    ...(!authContext?.session ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Routes;