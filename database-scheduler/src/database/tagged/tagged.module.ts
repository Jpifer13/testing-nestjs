import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaggedService } from './tagged.service';
import { TaggedController } from './tagged.controller';
import { tagged } from './tagged';

@Module({
    imports: [TypeOrmModule.forFeature([tagged])],
    providers: [TaggedService],
    controllers: [TaggedController],
  })
export class TaggedModule {}
