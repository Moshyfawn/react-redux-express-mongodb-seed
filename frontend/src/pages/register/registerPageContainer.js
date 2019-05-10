import { connect } from "react-redux";

import RegisterPage from "./registerPage";
import { register } from "../../store/user";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
