import { Module } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreaturesController } from './creatures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatureEntity } from './entities/creature.entity';

@Module({
  controllers: [CreaturesController],
  providers: [CreaturesService],
  imports: [TypeOrmModule.forFeature([CreatureEntity])]
})
export class CreaturesModule {}
