import { connect } from "react-redux";

import LoginPage from "./loginPage";
import { login } from "../../store/user";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
