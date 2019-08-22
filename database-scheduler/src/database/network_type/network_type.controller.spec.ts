import { Test, TestingModule } from '@nestjs/testing';
import { NetworkTypeController } from './network_type.controller';

describe('NetworkType Controller', () => {
  let controller: NetworkTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetworkTypeController],
    }).compile();

    controller = module.get<NetworkTypeController>(NetworkTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
