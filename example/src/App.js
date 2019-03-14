import React, { Component } from "react";

import ContactCard from "react-contactcard";

export default class App extends Component {
  render() {
    const phonenumbers = [
      {
        type: "WORK",
        value: "+555 4321"
      }
    ];

    const addresses = [
      {
        type: "WORK",
        value: "1234 Livingston Street, NY, USA"
      }
    ]

    return (
      <div style={{maxWidth: 500}}>
        <ContactCard
          fullName="Abraham Lincoln"
          title="Boxer, President of the United States"
          email="abe@whitehouse.gov"
          phonenumbers={phonenumbers}
          addresses={addresses}
          organization="United States Goverment"
          photo="abraham-lincoln.jpg"
        />
      </div>
    );
  }
}
