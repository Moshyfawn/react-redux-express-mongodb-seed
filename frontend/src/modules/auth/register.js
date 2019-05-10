import React, { PureComponent } from "react";
import Form, { Input, FormButton } from "react-standalone-form";

class Register extends PureComponent {
  state = { errors: "" };

  handleSubmit = async fields => {
    this.props.onSubmit(fields);
  };

  render() {
    const { className } = this.props;
    return (
      <Form
        fields={["name", "email", "password", "password_confirm"]}
        className={className}
      >
        <Input name="name" label="Name" />
        <Input name="email" label="E-mail" />
        <Input name="password" label="Password" type="password" />
        <Input
          name="password_confirm"
          label="Confirm password"
          type="password"
        />
        <FormButton callback={this.handleSubmit}>Register</FormButton>
      </Form>
    );
  }
}

export default Register;
