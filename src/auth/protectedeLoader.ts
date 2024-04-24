import { LoaderFunctionArgs, redirect } from "react-router-dom"
import { fakeAuthProvider } from "./auth";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY) 

export const protectedLoader = async ({ request }: LoaderFunctionArgs) => { 
    
    
const { data, error } = await supabase.auth.getSession();

console.log(data, error);
    
    if (!data.session) {
        let params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }

    return { userEmail: fakeAuthProvider.username };
 }