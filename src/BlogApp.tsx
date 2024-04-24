//import { createClient } from '@supabase/supabase-js'
import './BlogApp.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthenticationPage, HomePage } from './pages'
import { loginAction, loginloader, logoutAction, protectedLoader, signupAction } from './auth'

// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: protectedLoader,
    element: <HomePage />,
  },
  {
    path: '/login',
    loader: loginloader,
    action: loginAction,
    element: <AuthenticationPage />
  },
  {
    path: '/signup',
    loader: loginloader,
    action: signupAction,
    element: <AuthenticationPage />
  },
  {
    path: "/logout",
    action: logoutAction,
  },
])

function BlogApp() {

  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  )
}

export default BlogApp
