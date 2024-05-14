import { HttpException, Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatureEntity } from './entities/creature.entity';
@Injectable()
export class CreaturesService {
  constructor(@InjectRepository(CreatureEntity) private creaturesRepository: Repository<CreatureEntity>) {}
  async create(createCreatureDto: CreateCreatureDto): Promise<CreatureEntity> {
    const creature = new CreatureEntity();
    creature.name = createCreatureDto.name;
    creature.description = createCreatureDto.description;
    creature.lastSee = createCreatureDto.lastSee;
    creature.countLastSee = createCreatureDto.countLastSee;
    creature.extinct = createCreatureDto.extinct;
    return this.creaturesRepository.save(creature);
  }
  async findAll(): Promise<CreatureEntity[]> {
    return this.creaturesRepository.find();
  }
  async findOne(id: number): Promise<CreatureEntity> {
    const creature = await this.creaturesRepository.findOne({where: {id}});
    if (!creature) {
      throw new HttpException(`Creature with id ${id} not found`, 404);
    }
    return creature;
  }
  async findExtinctCreatures(): Promise<CreatureEntity[]> {
    return this.creaturesRepository.find({where: {extinct: true}});
  }
  async update(id: number, updateCreatureDto: UpdateCreatureDto): Promise<CreatureEntity> {
    const creature = await this.findOne(id);
    creature.name = updateCreatureDto.name;
    creature.description = updateCreatureDto.description;
    creature.lastSee = updateCreatureDto.lastSee;
    creature.countLastSee = updateCreatureDto.countLastSee;
    creature.extinct = updateCreatureDto.extinct;
    return this.creaturesRepository.save(creature);
  }
  async remove(id: number): Promise<void> {
    const creature = await this.findOne(id);
    await this.creaturesRepository.remove(creature);
  }
}
