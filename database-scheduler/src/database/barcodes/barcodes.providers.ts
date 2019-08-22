import { Connection, Repository } from 'typeorm';
import { barcodes } from './barcodes';

export const BarcodesProviders = [
  {
    provide: 'BARCODES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(barcodes),
    inject: ['DATABASE_CONNECTION'],
  },
];