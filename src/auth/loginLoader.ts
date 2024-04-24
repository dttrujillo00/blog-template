import { redirect } from "react-router-dom";
import { fakeAuthProvider } from "./auth";

export const loginloader = () => {

    if (fakeAuthProvider.isAuthenticated) {
        return redirect('/')
    }

    return null;

}