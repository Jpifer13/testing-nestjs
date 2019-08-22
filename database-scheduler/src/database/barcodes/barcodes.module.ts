import { Module, forwardRef } from '@nestjs/common';
import { AppModule } from '../../app.module';
import { BarcodesProviders } from './barcodes.providers';
import { BarcodesService } from './barcodes.service';
import { BarcodesController } from './barcodes.controller';
import { DatabaseModule } from '../../database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { barcodes } from './barcodes';

@Module({
    imports: [
      TypeOrmModule.forFeature([barcodes])
    ],
    providers: [BarcodesService],
    controllers: [BarcodesController]
  })
export class BarcodesModule {}
