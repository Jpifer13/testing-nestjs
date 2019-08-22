import { Test, TestingModule } from '@nestjs/testing';
import { BarcodesController } from './barcodes.controller';
import { BarcodesService } from './barcodes.service';

describe('Barcodes Controller', () => {
  let controller: BarcodesController;
  let service: BarcodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarcodesController],
      providers: [
        {
          provide: BarcodesService,
          useValue: {
            findAll: jest
              .fn()
              .mockResolvedValue([])
          }
        }
      ]
    }).compile();

    controller = module.get<BarcodesController>(BarcodesController);
    service = module.get<BarcodesService>(BarcodesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('indexedDB', () => {
    it('should get an empty array of for the barcodes table', () => {
      expect(controller.indexedDB()).resolves.toEqual([]);
    });
  });
});
