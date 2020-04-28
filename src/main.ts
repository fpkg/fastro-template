import { createServer, start } from 'fastro'

createServer()
  .then(server => {
    start(server)
  })