import React, { PureComponent } from "react";
import Form, { Input, FormButton } from "react-standalone-form";

class Login extends PureComponent {
  state = { errors: {} };

  handleSubmit = async fields => {
    this.props.onSubmit(fields);
  };

  render() {
    const { className } = this.props;
    return (
      <Form fields={["email", "password"]} className={className}>
        <Input name="email" label="E-mail" />
        <Input name="password" label="Password" type="password" />
        <FormButton callback={this.handleSubmit}>Login</FormButton>
      </Form>
    );
  }
}

export default Login;
