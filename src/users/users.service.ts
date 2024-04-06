import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PG_CONNECTION } from '@/constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.conn
      .insert(schema.users)
      .values({ email: createUserDto.email })
      .returning();
  }

  async findAll() {
    return await this.conn.query.users.findMany();
  }

  async findOne(id: string) {
    return await this.conn.query.users.findFirst({
      where: eq(schema.users.id, id),
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.conn
      .update(schema.users)
      .set(updateUserDto)
      .where(eq(schema.users.id, id))
      .returning();
  }

  async remove(id: string) {
    return await this.conn
      .delete(schema.users)
      .where(eq(schema.users.id, id))
      .returning();
  }
}
