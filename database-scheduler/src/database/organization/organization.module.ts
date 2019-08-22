import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { organization } from './organization';

@Module({
    imports: [TypeOrmModule.forFeature([organization])],
    providers: [OrganizationService],
    controllers: [OrganizationController],
  })
export class OrganizationModule {}
