import { createContext, useContext, useEffect, useState } from "react"
import { Session } from '@supabase/supabase-js'
import { supabase } from "../core/Supabase/supabaseClient";

interface AuthProviderProps {
    children?: React.ReactNode;
}

interface IAuthContext {
    session: Session | null;
    updateSession: () => Promise<void> | void;
    signin: (email: string, password: string) => Promise<void> | void;
    signout: () => Promise<void> | void;
    signup: (username: string, email: string, password: string) => Promise<void> | void;
}

let initialContext: IAuthContext = {
    session: null,
    updateSession: () => {},
    signin: (email: string, password: string) => {},
    signout: () => {},
    signup: (username: string, email: string, password: string) => {}
};

const AuthContext = createContext<IAuthContext>(initialContext);

const AuthProvider = ({ children }: AuthProviderProps) => {

    // Aqui obtengo la sesión del localStorage
    const sessionStorage: string | null = localStorage.getItem('sb-mzyesocfxknxvnsvfldg-auth-token');

    // Si existe la sesión, la almaceno en la variable inicializadora del estado de sesión
    // Si no existe inicialiozar con null
    const mySession: Session | null = sessionStorage ? JSON.parse(sessionStorage) : null;

    const [session, setSession] = useState<Session | null>(mySession)



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

    // Inicia session y actualiza la session en la aplicacion
    const signin = async (email: string, password: string) => {

        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        updateSession()
    }

    // Cierra la session y actualiza la session en la aplicacion
    const signout = async () => { 
        await supabase.auth.signOut()
        updateSession();
     }

    //  Registra un nuevo usuario y actualiza la session en la aplicacion
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