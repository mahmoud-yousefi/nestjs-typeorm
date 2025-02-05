import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    private readonly entityManager: EntityManager
  ) { }

  async create(createItemDto: CreateItemDto) {
    const listing = new Listing({
      ...createItemDto.listing,
      rating: 0,
    })
    const item = new Item({
      ...createItemDto,
      comments: [],
      listing,
    });
    return await this.entityManager.save(item);
  }

  findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: number) {
    // this.itemRepository.findOneBy({id});
    return this.itemRepository.findOne({ 
      where: {id},
      relations: {listing: true, comments: true}
     });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemRepository.findOneBy({id});
    item.public = updateItemDto.public;
    return await this.itemRepository.save(item);
  }

  async remove(id: number) {
    await this.itemRepository.delete(id);
  }
}
