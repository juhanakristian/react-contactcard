import React, { Component } from "react";

import ContactCard from "react-contactcard";

export default class App extends Component {
  render() {
    return (
      <div style={{maxWidth: 500}}>
        <ContactCard
          fullName="Abraham Lincoln"
          title="Boxer, President of the United States"
          email="abe@whitehouse.gov"
          phone="+555 4321"
          profilePicture="abraham-lincoln.jpg"
        />
      </div>
    );
  }
}
