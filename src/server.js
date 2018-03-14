const http = require('http')

const app = require('./app')

const server = http.createServer(app)

server.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}`)
})

process.on('SIGINT', () => {
  console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString())
  shutdown()
})

process.on('SIGTERM', () => {
  console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString())
  shutdown()
})

const shutdown = () => {
  server.close(err => {
    if (err) {
      console.error(err)
      process.exitCode = 1
    }
    process.exit()
  })
}
