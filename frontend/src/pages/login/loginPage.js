import React, { PureComponent } from "react";
import styled from "styled-components";

import Login from "../../modules/auth/login";
import PageWrapper from "../../modules/navigation/pageWrapper";

class LoginPage extends PureComponent {
  render() {
    const { login } = this.props;
    return (
      <PageWrapper>
        <div className="login-page">
          <LoginForm onSubmit={login} className={this.className} />
        </div>
      </PageWrapper>
    );
  }
}

const LoginForm = styled(Login)`
  padding: 100px;
`;

export default LoginPage;
