import React from "react"
import { Route, Redirect } from "react-router-dom"


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem("token") ? (
            <Component {...props} />
          ) : (
            <Redirect to="/dashboard" />
          )
        }
      />
    </div>
  )
}
export default PrivateRoute