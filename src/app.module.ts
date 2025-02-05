import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    DatabaseModule,
    ItemsModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
