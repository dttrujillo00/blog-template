import { redirect } from "react-router-dom";
import { fakeAuthProvider } from "./auth";

export const logoutAction = async () => {
    // We signout in a "resource route" that we can hit from a fetcher.Form
    await fakeAuthProvider.signout();
    return redirect("/");
}