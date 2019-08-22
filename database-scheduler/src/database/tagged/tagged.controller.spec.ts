import { Test, TestingModule } from '@nestjs/testing';
import { TaggedController } from './tagged.controller';

describe('Tagged Controller', () => {
  let controller: TaggedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaggedController],
    }).compile();

    controller = module.get<TaggedController>(TaggedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
