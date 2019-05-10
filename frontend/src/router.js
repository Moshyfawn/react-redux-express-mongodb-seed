import React, { PureComponent } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import PublicLayout from "./layouts/publicLayout";

import RegisterPage from "./pages/register/registerPageContainer";
import LoginPage from "./pages/login/loginPageContainer";
import HomePage from "./pages/home/homePageContainer";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // console.log("props", props, ...rest);

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <AppRoute exact path="/" layout={PublicLayout} component={HomePage} />
        <AppRoute
          exact
          path="/register"
          layout={PublicLayout}
          component={RegisterPage}
        />
        <AppRoute
          exact
          path="/login"
          layout={PublicLayout}
          component={LoginPage}
        />
      </Switch>
    );
  }
}

export default withRouter(Routes);
