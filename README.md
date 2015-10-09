# frrb

![frrb logo](https://cdn.rawgit.com/joakimbeng/frrb/v0.1.0/media/frrb.png)

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Fat Responsive Radiobutton

## Installation

Install `frrb` using [npm](https://www.npmjs.com/):

```bash
npm install --save frrb
```

## Demo

See a [demo of the component here](https://joakimbeng.github.io/frrb).


## Usage

### Module usage

**In your React app:**

```javascript
import React from 'react';
import FatResponsiveRadiobutton from 'frrb';

class App extends React.Component {
	render() {
		return <FatResponsiveRadiobutton>Check me</FatResponsiveRadiobutton>;
	}
}
```

**In your Unistyle code:**

```javascript
import fatResponsiveRadiobutton from 'frrb/style';

export default [
	fatResponsiveRadiobutton,
	// your other styles here...
];
```

## API

### `<FatResponsiveRadiobutton {...props} />`

| Prop | Type | Description |
|------|------|-------------|
| striked | `Boolean` | Toggle the alternate style (strike through text when checked) |
| caption | `String` | Radiobutton label text. Can also be specified as [`children`](https://facebook.github.io/react/docs/multiple-components.html#children) |
| ... | `Mixed` | All other props are passed on to the internal `<input>` see [Forms](https://facebook.github.io/react/docs/forms.html) for examples |


## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/frrb
[npm-image]: https://badge.fury.io/js/frrb.svg
[travis-url]: https://travis-ci.org/joakimbeng/frrb
[travis-image]: https://travis-ci.org/joakimbeng/frrb.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
