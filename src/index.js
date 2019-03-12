import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class ContactCard extends Component {
  static propTypes = {
    fullName: PropTypes.string,
    title: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    profilePicture: PropTypes.string
  };

  render() {
    const { fullName, title, phone, email, profilePicture } = this.props;

    return (
      <div className={styles.card}>
        <div className={styles.profilePicture}>
          <img src={profilePicture} />
        </div>
        <div className={styles.content}>
          <div className={styles.icons} />
          <h1>{fullName}</h1>
          <h2>{title}</h2>
          <h2>{email}</h2>
          <h2>{phone}</h2>
        </div>
      </div>
    );
  }
}
