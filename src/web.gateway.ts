// web.gateway.ts
import { Gateway, InjectController, GatewayHook } from 'fastro'
import { HelloController } from './hello.controller'
import { FastifyRequest, FastifyReply } from 'fastify'

@Gateway({ prefix: 'web' })
export class WebGateway {
  @InjectController(HelloController)
  helloController: HelloController

  @GatewayHook('onRequest')
  async myHook (request: FastifyRequest): Promise<void> {
    // This hook will always be executed 
    // after the shared `onRequest` hooks
  }
}