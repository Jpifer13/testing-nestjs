import { Controller, Get } from '@nestjs/common';
import { barcodes } from './barcodes';
import { BarcodesService } from './barcodes.service';

@Controller('barcodes')
export class BarcodesController {
    constructor(private readonly barcodesService: BarcodesService){}

    @Get()
    indexedDB(): Promise<barcodes[]> {
        return this.barcodesService.findAll();
    }
}
