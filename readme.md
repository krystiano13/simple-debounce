# debounce-basic

## Simple debounce implementation to save your time

## API

callBack: <br />
Type: Function <br />
This is what you want to debounce <br />

delay: <br />
Type: Number

## Usage Example:

```javascript
const debounce = require('simple-debounce');

const func = debounce(() => {
    console.log("debounce");
}, 2500);

func();
```

