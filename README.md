# NodeJS Docker

## Start

```bash
$ docker-compose up -d --build
```

## Open Browser

[http://localhost:3000](http://localhost:3000)

## Edit Source Code

> edit src/app.js

```javascript
const express = require('express')
const app = express()

app.set('port', process.env.PORT || '3000')

app.get('/', (req, res) => {
  res.end('Edit!')
})

module.exports = app
```

### Refresh Browser

> refresh http://localhost:3000
