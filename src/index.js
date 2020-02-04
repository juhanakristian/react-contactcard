import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import styles from './styles.css'

import {TwitterIcon, FacebookIcon, LinkedInIcon} from './socialicons.js'

export default class ContactCard extends Component {
  static propTypes = {
    fullName: PropTypes.string,
    title: PropTypes.string,
    organization: PropTypes.string,
    photo: PropTypes.string,
    phoneNumber: PropTypes.object,
    address: PropTypes.object,
    email: PropTypes.string,
    visibleFields: PropTypes.array,
    socialLinks: PropTypes.object,
    classes: PropTypes.object,
    primaryColor: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    profileStyle: PropTypes.oneOf(['round', 'cover'])
  };

  static defaultProps = {
    visibleFields: ['title', 'organization', 'phoneNumber', 'address', 'email'],
    socialLinks: {},
    classes: {
      card: '',
      photo: '',
      content: '',
      icons: ''
    },
    primaryColor: '#f0f0f0',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    profileStyle: 'round'
  };

  render() {
    const {
      fullName,
      title,
      organization,
      phoneNumber,
      address,
      email,
      photo,
      visibleFields,
      socialLinks,
      classes,
      primaryColor,
      textColor,
      backgroundColor
    } = this.props

    const socialIcons = Object.keys(socialLinks)

    return (
      <div className={classNames(styles.card, classes.card)}
        style={{backgroundColor}}>
        <div className={classNames(styles.photo, classes.photo)}
          style={{backgroundColor: primaryColor}}>
          <img alt={fullName} src={photo} />
        </div>
        <div className={classNames(styles.content, classes.content)}
          style={{color: textColor}}>
          <h1>{fullName}</h1>
          {visibleFields.includes('title') && <h2>{title}</h2>}
          {visibleFields.includes('organization') && <h2>{organization}</h2>}
          {visibleFields.includes('email') && <h2>{email}</h2>}
          {visibleFields.includes('phoneNumber') && (
            <h2>{phoneNumber.value}</h2>
          )}
          {visibleFields.includes('address') && <h2>{address.value}</h2>}
        </div>
        <div className={classNames(styles.icons, classes.icons)}>
          {socialIcons.includes('linkedin') && (
            <div className={styles.iconbutton}>
              <a href={socialLinks.linkedin}>
                <LinkedInIcon />
              </a>
            </div>
          )}
          {socialIcons.includes('facebook') && (
            <div className={styles.iconbutton}>
              <a href={socialLinks.facebook}>
                <FacebookIcon />
              </a>
            </div>
          )}
          {socialIcons.includes('twitter') && (
            <div className={classNames(styles.iconbutton, styles.twitter)}>
              <a href={socialLinks.twitter}>
                <TwitterIcon />
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}
