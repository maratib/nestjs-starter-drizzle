import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { AppModule } from '@/app.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

  // it('Create User', async () => {
  //   const res = await service.create({ email: 'shehroz2@gmail.com' });
  //   console.log(res);
  // });

  it('Find one user', async () => {
    const res = await service.findOne('d46afb37-a372-4340-ae0b-2d74bf0f920f');
    expect(res.id).toBe('d46afb37-a372-4340-ae0b-2d74bf0f920f');

    // console.log(res);
  });

  it('Find all users', async () => {
    // const res = await service.findAll();
    // console.log(res);
  });
});
