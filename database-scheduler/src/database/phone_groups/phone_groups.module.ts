import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneGroupsService } from './phone_groups.service';
import { PhoneGroupsController } from './phone_groups.controller';
import { phone_groups } from './phone_groups';

@Module({
    imports: [TypeOrmModule.forFeature([phone_groups])],
    providers: [PhoneGroupsService],
    controllers: [PhoneGroupsController],
  })
export class PhoneGroupsModule {}
