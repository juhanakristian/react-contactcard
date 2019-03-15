import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class ContactCard extends Component {
  static propTypes = {
    fullName: PropTypes.string,
    title: PropTypes.string,
    organization: PropTypes.string,
    photo: PropTypes.string,
    phonenumbers: PropTypes.array,
    addresses: PropTypes.array,
    email: PropTypes.string
  };

  render() {
    const { fullName, title, organization, phonenumbers, addresses, email, photo} = this.props;

    const tel = phonenumbers.map(phone => {
      return (
        <h2>
          {phone.type} {phone.value}
        </h2>
      );
    });

    const addr = addresses.map(address => {
      return (
        <h2>
          {address.type} {address.value}
        </h2>
      );
    });

    return (
      <div className={styles.card}>
        <div className={styles.photo}>
          <img src={photo} />
        </div>
        <div className={styles.content}>
          <div className={styles.icons} />
          <h1>{fullName}</h1>
          <h2>{title}</h2>
          <h2>{organization}</h2>
          <h2>{email}</h2>
          {tel}
          {addr}
        </div>
      </div>
    );
  }
}
