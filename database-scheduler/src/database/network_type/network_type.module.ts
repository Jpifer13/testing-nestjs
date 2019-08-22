import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetworkTypeService } from './network_type.service';
import { NetworkTypeController } from './network_type.controller';
import { network_type } from './network_type';

@Module({
    imports: [TypeOrmModule.forFeature([network_type])],
    providers: [NetworkTypeService],
    controllers: [NetworkTypeController],
  })
export class NetworkTypeModule {}
