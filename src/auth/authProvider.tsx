import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { createClient, Session } from '@supabase/supabase-js'

interface AuthProviderProps {
    children?: React.ReactNode;
}

interface IAuthContext {
    session: Session | null;
    updateSession: () => Promise<void>;
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

    const contextValue = useMemo(
        () => ({
            session,
            updateSession
        }), 
        [session]
    );



    return (
        <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider