import React from "react";

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null,
  };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="btn btn-danger" onClick={() => this.auth.signOut()}>
          <i className="bi bi-google me-2"></i>Logout
        </button>
      );
    } else {
      return (
        <button className="btn btn-success" onClick={() => this.auth.signIn()}>
          <i className="bi bi-google me-2"></i>Login
        </button>
      );
    }
  }
  render() {
    return <div className="mx-2">{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
