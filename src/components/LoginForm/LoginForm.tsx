import { Form, Link, useActionData, useLocation, useNavigation } from "react-router-dom"


export const LoginForm = () => {

  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get('from') || '/';

  let navigation = useNavigation();
  let isLoggingIn = navigation.formData != null;

  let actionData = useActionData() as { error: string } | undefined;

  return (
    <div>
      <Form method="post" replace>
        <input type="hidden" name="redirectTo" value={from} />

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form-control">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" disabled={isLoggingIn}>
          { isLoggingIn ? "Procesando..." : "Iniciar sesión" }
        </button>

        {
          actionData && actionData.error ? (
            <p style={{ color: "red" }}>{actionData.error}</p>
          ) : null
        }

      </Form>

      <p>¿No tienes cuenta? <Link to={'/signup'}>Regístrate</Link></p>
    </div>
  )
}