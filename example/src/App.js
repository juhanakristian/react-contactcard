import React, { Component } from "react";

import ContactCard from "react-contactcard";

export default class App extends Component {
  render() {
    return (
      <div style={{maxWidth: 500}}>
        <ContactCard
          fullName="John Smith"
          title="Front end developer"
          email="john@example.com"
          phone="+555 4321"
        />
      </div>
    );
  }
}
