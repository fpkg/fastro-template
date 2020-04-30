import { Service, BasicService } from 'fastro'
import { User } from './user.entity'

@Service()
export class HelloService extends BasicService {
  public sayHello (): string {
    return 'Hello'
  }

  public async getAllUser (): Promise<User[]> {
    try {
      return this.repo(User).find({
        select: ['username', 'email']
      })
    } catch (error) {
      throw this.err('GET_ALL_USER_ERROR', error)
    }
  }
}