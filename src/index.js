import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import { ReactComponent as LinkedIn } from "./icons/linkedin.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Twitter } from "./icons/twitter.svg";
import { ReactComponent as Download } from "./icons/download.svg";

export default class ContactCard extends Component {
  static propTypes = {
    fullName: PropTypes.string,
    title: PropTypes.string,
    organization: PropTypes.string,
    photo: PropTypes.string,
    phonenumber: PropTypes.object,
    address: PropTypes.object,
    email: PropTypes.string,
    visibleFields: PropTypes.array,
    socialLinks: PropTypes.object
  };

  static defaultProps = {
    visibleFields: ["title", "organization", "phonenumber", "address", "email"],
    socialLinks: {}
  };

  render() {
    const {
      fullName,
      title,
      organization,
      phonenumber,
      address,
      email,
      photo,
      visibleFields,
      socialLinks
    } = this.props;

    const socialIcons = Object.keys(socialLinks);

    return (
      <div className={styles.card}>
        <div className={styles.photo}>
          <img src={photo} />
        </div>
        <div className={styles.content}>
          <h1>{fullName}</h1>
          {visibleFields.includes("title") && <h2>{title}</h2>}
          {visibleFields.includes("organization") && <h2>{organization}</h2>}
          {visibleFields.includes("email") && <h2>{email}</h2>}
          {visibleFields.includes("phonenumber") && (
            <h2>{phonenumber.value}</h2>
          )}
          {visibleFields.includes("address") && <h2>{address.value}</h2>}
        </div>
        <div className={styles.icons}>
          <div className={styles.iconbutton}>
            <Download />
          </div>
          {socialIcons.includes("linkedin") && (
            <div className={styles.iconbutton}>
              <a href={socialLinks.linkedin}>
                <LinkedIn />
              </a>
            </div>
          )}
          {socialIcons.includes("facebook") && (
            <div className={styles.iconbutton}>
              <a href={socialLinks.facebook}>
                <Facebook />
              </a>
            </div>
          )}
          {socialIcons.includes("twitter") && (
            <div className={styles.iconbutton}>
              <a href={socialLinks.twitter}>
                <Twitter />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
