// file user.entity.ts
import { Entity, Column, Index } from 'typeorm'
import { BasicEntity } from 'fastro'

@Entity()
export class User extends BasicEntity {
  @Column({ unique: true })
  email: string

  @Column({ unique: true })
  username?: string

  @Column()
  password?: string
}