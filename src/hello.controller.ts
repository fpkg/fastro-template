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
}