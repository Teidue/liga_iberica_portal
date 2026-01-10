import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
  ) {}

  findAll() {
    return this.clubRepository.find();
  }

  findOne(id: number) {
    return this.clubRepository.findOne({ where: { id } });
  }

  create(clubData: DeepPartial<Club>) {
    const club = this.clubRepository.create(clubData);
    return this.clubRepository.save(club);
  }

  async update(id: number, clubData: DeepPartial<Club>) {
    await this.clubRepository.update(id, clubData);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.clubRepository.delete(id);
    return { deleted: true };
  }
}
