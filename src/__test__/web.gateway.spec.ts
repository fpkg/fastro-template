import { FastifyInstance } from 'fastify'
import { createServer } from 'fastro'

let server: FastifyInstance

beforeAll(async () => {
  server = await createServer()
})

afterAll(() => {
  server.close()
})

describe('gateway test', () => {
  test('gateway prefix test', async done => {
    const result = await server.inject({
      url: '/web/',
      method: 'GET'
    })
    expect(result.payload).toContain('Hello')
    done()
  })
})
