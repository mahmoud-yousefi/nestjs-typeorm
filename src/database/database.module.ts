import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.getOrThrow('PG_HOST'),
                port: configService.getOrThrow('PG_PORT'),
                database: configService.getOrThrow('PG_DB'),
                username: configService.getOrThrow('PG_USER'),
                password: configService.getOrThrow('PG_PASSWORD'),
                autoLoadEntities: true,
                synchronize: true,
            }),
            inject: [ConfigService],
        })
    ]
})
export class DatabaseModule {}
