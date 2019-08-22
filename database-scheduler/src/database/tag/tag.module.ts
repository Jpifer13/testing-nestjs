import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { tag } from './tag';

@Module({
    imports: [TypeOrmModule.forFeature([tag])],
    providers: [TagService],
    controllers: [TagController],
  })
export class TagModule {}
