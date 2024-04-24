import { useFetcher } from "react-router-dom"


export const AuthStatus = () => {

    let fetcher = useFetcher();

    let isLoggingOut = fetcher.formData != null;

  return (
    <div>
        <p>Bienvenido</p>
        <fetcher.Form method="post" action="/logout">
        <button type="submit" disabled={isLoggingOut}>
          {isLoggingOut ? "Procesando..." : "Cerrar sesión"}
        </button>
      </fetcher.Form>
    </div>
  )
}