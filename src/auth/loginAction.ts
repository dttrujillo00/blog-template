import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { fakeAuthProvider } from "./auth";

export const loginAction = async ({ request }: LoaderFunctionArgs) => {

    let formData = await request.formData();
    let email = formData.get('email') as string | null;
    let password = formData.get('password') as string | null;

    if (!email || !password) {
        return {
            error: "Debes agregar un correo electrónico y una contraseña"
        }
    }

    // Sign in and redirect to the proper destination if successful.
    try {
        await fakeAuthProvider.signin(email, password);
    } catch (error) {
        // Unused as of now but this is how you would handle invalid
        // username/password combinations - just like validating the inputs
        // above
        return {
            error: "Invalid login attempt",
        };
    }

    let redirectTo = formData.get("redirectTo") as string | null;
    return redirect(redirectTo || "/");

}