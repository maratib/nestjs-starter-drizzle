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

  it('Create User', async () => {
    const res = await service.create({ email: 'shehroz1@gmail.com' });
    console.log(res);
  });

  it('Find one user', async () => {
    const res = await service.findOne('587843d1-b272-41c4-9e0c-67ebe48bac2e');
    expect(res.id).toBe('587843d1-b272-41c4-9e0c-67ebe48bac2e');

    // console.log(res);
  });

  it('Find all users', async () => {
    const res = await service.findAll();
    console.log(res);
  });
});
