import { Test, TestingModule } from '@nestjs/testing';
import { BarcodesService } from './barcodes.service';
import { Repository } from 'typeorm';
import { barcodes } from './barcodes';
import { getRepositoryToken } from '@nestjs/typeorm';

const barcodeArray = []

describe('BarcodesService', () => {
  let service: BarcodesService;
  let repo: Repository<barcodes>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarcodesService,
      {
        provide: getRepositoryToken(barcodes),
        useValue: {
          findAll: jest.fn().mockResolvedValue(barcodeArray)
        }
      }],
    }).compile();

    service = module.get<BarcodesService>(BarcodesService);
    repo = module.get<Repository<barcodes>>(getRepositoryToken(barcodes));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findAll', () => {
    it('should get an empty array of for the barcodes table', () => {
      expect(service.findAll()).resolves.toEqual(barcodeArray);
    });
  });
});
