import { Injectable } from '@nestjs/common';
import { CreateAdvantageDto } from './dto/create-advantage.dto';
import { UpdateAdvantageDto } from './dto/update-advantage.dto';

@Injectable()
export class AdvantagesService {
  create(createAdvantageDto: CreateAdvantageDto) {
    return 'This action adds a new advantage';
  }

  findAll() {
    return `This action returns all advantages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advantage`;
  }

  update(id: number, updateAdvantageDto: UpdateAdvantageDto) {
    return `This action updates a #${id} advantage`;
  }

  remove(id: number) {
    return `This action removes a #${id} advantage`;
  }
}
