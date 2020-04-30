import { Controller, Get, InjectService, Hook } from 'fastro'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Http2ServerResponse } from 'http2'
import { HelloService } from './hello.service'

@Controller()
export class HelloController {
  @InjectService(HelloService)
  service: HelloService

  @Get()
  sayHello (request: FastifyRequest, reply: FastifyReply<Http2ServerResponse>): void {
    const hello = this.service.sayHello()
    reply.send(hello)
  }

  @Get({ url: '/user' })
  async getUser (request: FastifyRequest, reply: FastifyReply<Http2ServerResponse>): Promise<void> {
    const user = await this.service.getAllUser()
    reply.send(user)
  }

  @Hook('onRequest')
  async myHook (request: FastifyRequest, reply: FastifyReply<Http2ServerResponse>): Promise<void> {
    // This hook will always be executed after the shared `onRequest` hooks
    // Check this for detail: https://www.fastify.io/docs/latest/Hooks/#scope
    console.log('request', request.headers)
  }
}