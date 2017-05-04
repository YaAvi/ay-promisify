# promisify
[![npm version](https://img.shields.io/badge/npm-1.0.1-green.svg)](https://www.npmjs.com/package/ay-promisify)

promisify node callbacks

### Install:
```
npm install ay-promisify
```
### Usage Example:
```javascript
var promisify = require('ay-promisify');
var readFile = promisifiy(require('fs').readFile);
readFile('index.js', 'utf8')
  .then(fileContent => console.log(fileContent)
  .catch(err => console.log(err))
```
