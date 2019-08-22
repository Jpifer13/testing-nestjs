import { Test, TestingModule } from '@nestjs/testing';
import { NetworkTypeService } from './network_type.service';

describe('NetworkTypeService', () => {
  let service: NetworkTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkTypeService],
    }).compile();

    service = module.get<NetworkTypeService>(NetworkTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
