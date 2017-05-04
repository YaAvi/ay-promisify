# promisify
promisify node callbacks


### Usage Example:
```javascript
var promisify = require('ay-promisify');
var readFile = promisifiy(require('fs').readFile);
readFile('index.js', 'utf8')
  .then(fileContent => console.log(fileContent)
  .catch(err => console.log(err))
```
