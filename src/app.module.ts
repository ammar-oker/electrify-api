import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsModule } from './locations/locations.module';
import { ChargersModule } from './chargers/chargers.module';

console.log(process.env['MONGO_URL'])

@Module({
  imports: [
    MongooseModule.forRoot(process.env['MONGO_URL'], {
      sslValidate: false,
    }),
    LocationsModule,
    ChargersModule,
  ],
})
export class AppModule {}
