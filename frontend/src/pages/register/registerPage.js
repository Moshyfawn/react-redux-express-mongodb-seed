import React, { PureComponent } from "react";
import styled from "styled-components";

import Register from "../../modules/auth/register";
import PageWrapper from "../../modules/navigation/pageWrapper";

class RegisterPage extends PureComponent {
  render() {
    const { register } = this.props;
    return (
      <PageWrapper>
        <div className="register-page">
          <RegisterForm onSubmit={register} className={this.className} />;
        </div>
      </PageWrapper>
    );
  }
}

const RegisterForm = styled(Register)`
  padding: 100px;
`;

export default RegisterPage;
