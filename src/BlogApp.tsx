//import { createClient } from '@supabase/supabase-js'
import './BlogApp.css'
import Routes from './routes'
import AuthProvider from './auth/authProvider'




function BlogApp() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default BlogApp
