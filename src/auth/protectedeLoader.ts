import { LoaderFunctionArgs, redirect } from "react-router-dom"
import { fakeAuthProvider } from "./auth";

export const protectedLoader = ({ request }: LoaderFunctionArgs) => { 
    if (!fakeAuthProvider.isAuthenticated) {
        let params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }

    return { userEmail: fakeAuthProvider.username };
 }