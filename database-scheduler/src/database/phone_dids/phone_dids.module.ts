import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneDidsService } from './phone_dids.service';
import { PhoneDidsController } from './phone_dids.controller';
import { phone_dids } from './phone_dids';

@Module({
    imports: [TypeOrmModule.forFeature([phone_dids])],
    providers: [PhoneDidsService],
    controllers: [PhoneDidsController],
  })
export class PhoneDidsModule {}
