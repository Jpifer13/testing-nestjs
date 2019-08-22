import { Injectable, Inject } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { barcodes } from './barcodes';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BarcodesService {
    constructor(
        @InjectRepository(barcodes)
        private readonly barcodesRepository: Repository<barcodes>,
    ) {}

    async findAll(): Promise<barcodes[]> {
        return await this.barcodesRepository.find();
    }

}