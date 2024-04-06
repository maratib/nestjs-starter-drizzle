import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AppModule } from '@/app.module';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('UsersController should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('post a user', async () => {
  //   const res = await controller.create({ email: 'maratib@gmail.com' });
  //   console.log(res);
  // });
});
