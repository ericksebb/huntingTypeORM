import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('creatures')
@ApiTags('creatures')
export class CreaturesController {
  constructor(private readonly creaturesService: CreaturesService) {}
  @Post()
    async create(@Body() createCreatureDto: CreateCreatureDto) { 
      try {
        await this.creaturesService.create(createCreatureDto
        );

        return {success: true, message: 'Creature created successfully'};
      } catch (error) {
        return {success: false, message: error.message};
      } 
    }
  @Get()
  async findAll() {
    try {
      const creatures = await this.creaturesService.findAll();
      return {success: true, data: creatures};
    } catch (error) {
      return {success: false, message: error.message};
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const creature = await this.creaturesService.findOne(+id);
      return {success: true, data: creature};
    } catch (error) {
      return {success: false, message: error.message};
    }
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCreatureDto: UpdateCreatureDto) {
    try {
      const creature = await this.creaturesService.update(+id, updateCreatureDto);
      return {success: true, data: creature};
    } catch (error) {
      return {success: false, message: error.message};
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.creaturesService.remove(+id);
      return {success: true, message: 'Creature deleted successfully'};
    } catch (error) {
      return {success: false, message: error.message};
    }
  }
}
