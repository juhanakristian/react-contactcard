import React, { Component } from "react";

import ContactCard from "react-contactcard";

export default class App extends Component {
  render() {
    const phonenumber = {
      type: "WORK",
      value: "+555 4321"
    };
    const address = {
      type: "WORK",
      value: "1234 Livingston Street, NY, USA"
    };

    return (
      <div >
        <ContactCard
          fullName="Abraham Lincoln"
          title="President of the United States"
          email="abe@whitehouse.gov"
          phonenumber={phonenumber}
          address={address}
          organization="United States Goverment"
          photo="abraham-lincoln.jpg"
        />
      </div>
    );
  }
}
