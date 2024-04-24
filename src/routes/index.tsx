import { protectedLoader } from "../auth"
import { ProtectedRoute } from "../components"


const Routes = () => {

    const routesForAuthenticatedOnly = [
        {
            path: "/",
            loader: protectedLoader,
            element: <ProtectedRoute />,
          },
          {
            path: "/logout",
            action: logoutAction,
          },
    ]

  return (
    <div>Routes</div>
  )
}

export default Routes