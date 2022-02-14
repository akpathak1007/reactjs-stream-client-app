import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1062296145759-3avpl85vdkrnjtihanbhlq90ph3l3hgp.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onLoginClick = () => {
    this.auth.signIn();
  };
  onLogoutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="btn btn-danger" onClick={this.onLogoutClick}>
          <i className="bi bi-google me-2"></i>Logout
        </button>
      );
    } else {
      return (
        <button className="btn btn-success" onClick={this.onLoginClick}>
          <i className="bi bi-google me-2"></i>Login
        </button>
      );
    }
  }
  render() {
    return <div className="mx-2">{this.renderAuthButton()}</div>;
  }
}

const mapStatesToProps = (states) => {
  return { isSignedIn: states.auth.isSignedIn };
};

export default connect(mapStatesToProps, { signIn, signOut })(GoogleAuth);
