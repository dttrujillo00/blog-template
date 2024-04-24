import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { fakeAuthProvider } from "./auth";

export const signupAction = async ({ request }: LoaderFunctionArgs) => {

    let formData = await request.formData();
    let username = formData.get('username') as string | null;
    let email = formData.get('email') as string | null;
    let password = formData.get('password') as string | null;

    if (!username || !email || !password) {
        return {
            error: "Todos los campos son obligatorios"
        }
    }

    // Sign in and redirect to the proper destination if successful.
    try {
        await fakeAuthProvider.signup(username, email, password);
    } catch (error) {
        // Unused as of now but this is how you would handle invalid
        // username/password combinations - just like validating the inputs
        // above
        return {
            error: "Invalid signup attempt",
        };
    }

    return redirect("/");

}