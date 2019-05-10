import React, { PureComponent } from "react";

import PageWrapper from "../../modules/navigation/pageWrapper";

class HomePage extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <div className="home-page">Home Page</div>
        <div>Logged in:{this.props.isAuthed.toString()}</div>
      </PageWrapper>
    );
  }
}

export default HomePage;
