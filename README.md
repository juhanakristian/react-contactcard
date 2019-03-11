# react-contactcard

> React component for displaying contact infromation and a downloadable vCard

[![NPM](https://img.shields.io/npm/v/react-contactcard.svg)](https://www.npmjs.com/package/react-contactcard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-contactcard
```

## Usage

```jsx
import React, { Component } from "react";

import ContactCard from "react-contactcard";

class Example extends Component {
  render() {
    return (
      <ContactCard
        fullName="John Smith"
        title="Front end developer"
        email="john@example.com"
        phone="+555 4321"
      />
    );
  }
}
```

## License

MIT © [juhanaj](https://github.com/juhanaj)
