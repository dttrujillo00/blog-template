import { createClient } from '@supabase/supabase-js'

interface AuthProvider {
  isAuthenticated: boolean;
  username: null | string;
  email: null | string;
  signup( username: string, email: string, password: string): Promise<void>
  signin(email: string, password: string): Promise<void>;
  signout(): Promise<void>;
}

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider: AuthProvider = {
  isAuthenticated: false,
  username: null,
  email: null,
  async signup( username: string, email: string, password: string) {

    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        }
      }
    })

    console.log(data, error)


    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.email = email;
  },
  async signin(email: string, password: string) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay

    
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
})

if (!error) {
  console.log(data)

  localStorage.setItem("user-email", data.user.email ? data.user.email : "");
  
} else {
  console.log(error)
}


    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.email = email;
  },
  async signout() {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = false;
    fakeAuthProvider.email = "";
  },
};