import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Item } from './src/items/entities/item.entity';
import { Listing } from './src/items/entities/listing.entity';
import { Comment } from './src/items/entities/comment.entity';
import { Tag } from './src/items/entities/tag.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.getOrThrow('PG_HOST'),
  port: configService.getOrThrow('PG_PORT'),
  database: configService.getOrThrow('PG_DB'),
  username: configService.getOrThrow('PG_USER'),
  password: configService.getOrThrow('PG_PASSWORD'),
  migrations: ['migrations/**'],
  entities: [Item, Listing, Comment, Tag],
});