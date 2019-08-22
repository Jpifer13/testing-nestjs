import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BarcodesModule } from './database/barcodes/barcodes.module';
import { NetworkModule } from './database/network/network.module';
import { NetworkTypeModule } from './database/network_type/network_type.module';
import { OrganizationModule } from './database/organization/organization.module';
import { PhoneDidsModule } from './database/phone_dids/phone_dids.module';
import { PhoneExtensionsModule } from './database/phone_extensions/phone_extensions.module';
import { PhoneGroupsModule } from './database/phone_groups/phone_groups.module';
import { TaggedModule } from './database/tagged/tagged.module';
import { TagModule } from './database/tag/tag.module';
import { BarcodesController } from './database/barcodes/barcodes.controller';
import { BarcodesService } from './database/barcodes/barcodes.service';
import { NetworkController } from './database/network/network.controller';
import { NetworkTypeController } from './database/network_type/network_type.controller';
import { OrganizationController } from './database/organization/organization.controller';
import { PhoneDidsController } from './database/phone_dids/phone_dids.controller';
import { PhoneExtensionsController } from './database/phone_extensions/phone_extensions.controller';
import { PhoneGroupsController } from './database/phone_groups/phone_groups.controller';
import { TaggedController } from './database/tagged/tagged.controller';
import { TagController } from './database/tag/tag.controller';
import { NetworkService } from './database/network/network.service';
import { NetworkTypeService } from './database/network_type/network_type.service';
import { OrganizationService } from './database/organization/organization.service';
import { PhoneDidsService } from './database/phone_dids/phone_dids.service';
import { PhoneExtensionsService } from './database/phone_extensions/phone_extensions.service';
import { PhoneGroupsService } from './database/phone_groups/phone_groups.service';
import { TaggedService } from './database/tagged/tagged.service';
import { TagService } from './database/tag/tag.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BarcodesModule,
    // NetworkModule,
    // NetworkTypeModule,
    // OrganizationModule,
    // PhoneDidsModule,
    // PhoneExtensionsModule,
    // PhoneGroupsModule,
    // TaggedModule,
    // TagModule
  ],
  // controllers: [AppController],
  // providers: [AppService]
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
