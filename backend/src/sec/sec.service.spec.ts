import { Test, TestingModule } from '@nestjs/testing';
import { SecService } from './sec.service';

describe('SecService', () => {
  let service: SecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecService],
    }).compile();

    service = module.get<SecService>(SecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
