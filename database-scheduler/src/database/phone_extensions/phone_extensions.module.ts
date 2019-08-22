import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneExtensionsService } from './phone_extensions.service';
import { PhoneExtensionsController } from './phone_extensions.controller';
import { phone_extensions } from './phone_extensions';

@Module({
    imports: [TypeOrmModule.forFeature([phone_extensions])],
    providers: [PhoneExtensionsService],
    controllers: [PhoneExtensionsController],
  })
export class PhoneExtensionsModule {}
