import { Injectable } from '@nestjs/common';
import { CreateCabinetDto } from './dto/create-cabinet.dto';
import { UpdateCabinetDto } from './dto/update-cabinet.dto';

@Injectable()
export class CabinetService {
  create(createCabinetDto: CreateCabinetDto) {
    return 'This action adds a new cabinet';
  }

  findAll() {
    return `This action returns all cabinet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cabinet`;
  }

  update(id: number, updateCabinetDto: UpdateCabinetDto) {
    return `This action updates a #${id} cabinet`;
  }

  remove(id: number) {
    return `This action removes a #${id} cabinet`;
  }
}
