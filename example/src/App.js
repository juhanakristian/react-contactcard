import React, {Component} from 'react'

import ContactCard from 'react-contactcard'

export default class App extends Component {
  render() {
    const phoneNumber = {
      type: 'WORK',
      value: '+555 4321'
    }
    const address = {
      type: 'WORK',
      value: '1234 Livingston Street, NY, USA'
    }

    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <ContactCard
          fullName='George Washington'
          title='President of the United States'
          email='georgen@whitehouse.gov'
          phoneNumber={phoneNumber}
          address={address}
          organization='United States Government'
          photo='george-washington.jpg'
          socialLinks={{
            'twitter': 'https://twitter.com/abe_lincoln',
            'facebook': '',
            'instagram': '',
            'linkedin': ''
          }}
        />
        <ContactCard
          fullName='Abraham Lincoln'
          title='President of the United States'
          email='abe@whitehouse.gov'
          phoneNumber={phoneNumber}
          address={address}
          organization='United States Government'
          photo='abraham-lincoln.jpg'
          backgroundColor='#B22234'
          textColor='white'
          primaryColor='#3C3B6E'
        />
      </div>
    )
  }
}
