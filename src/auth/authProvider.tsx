import { createContext, useContext, useEffect, useState } from "react"
import { createClient, Session } from '@supabase/supabase-js'

interface AuthProviderProps {
    children?: React.ReactNode;
}

interface IAuthContext {
    session: Session | null;
    updateSession: () => Promise<void>;
    signin: (email: string, password: string) => Promise<void>;
    signout: () => Promise<void>;
    signup: (username: string, email: string, password: string) => Promise<void>;
}

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [session, setSession] = useState<Session | null>(null)



    useEffect(() => {
        updateSession();

    }, [])

    // Actualiza la session en la aplicacion a partir de
    // la almacenada en el local storage
    const updateSession = async () => {
        supabase.auth.getSession()
            .then(({ data }) => {
                setSession(data.session)
            });
    }

    const signin = async (email: string, password: string) => {

        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        updateSession()
    }

    const signout = async () => { 
        await supabase.auth.signOut()
        updateSession();
     }

     const signup = async(username: string, email: string, password: string) => { 
        await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                username,
              }
            }
          })
          updateSession();
      }



    return (
        <AuthContext.Provider value={{ session, updateSession, signin, signout, signup }} >{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider