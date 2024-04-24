import { Form, Link, useActionData, useNavigation } from "react-router-dom"


export const SignUpForm = () => {

  let navigation = useNavigation();
  let isLoggingIn = navigation.formData != null;

  let actionData = useActionData() as { error: string } | undefined;

  return (
    <div>
      <Form method="post" replace>

        <div className="form-control">
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form-control">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" disabled={isLoggingIn}>
          { isLoggingIn ? "Procesando..." : "Registrarse" }
        </button>

        {
          actionData && actionData.error ? (
            <p style={{ color: "red" }}>{actionData.error}</p>
          ) : null
        }

      </Form>

      <p>¿Ya tienes cuenta? <Link to={'/'}>Inicia sesión</Link></p>
    </div>
  )
}