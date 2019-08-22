import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetworkService } from './network.service';
import { NetworkController } from './network.controller';
import { network } from './network';

@Module({
    imports: [TypeOrmModule.forFeature([network])],
    providers: [NetworkService],
    controllers: [NetworkController],
  })
export class NetworkModule {}
