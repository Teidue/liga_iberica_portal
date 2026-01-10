import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private repo: Repository<Team>,
  ) {}

  findAll() {
    return this.repo.find({
      relations: ['admin'], // si luego quieres players o torneos, se agregan aquí
    });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['admin'],
    });
  }

  create(data: DeepPartial<Team>) {
    const team = this.repo.create(data);
    return this.repo.save(team);
  }

  async update(id: number, data: DeepPartial<Team>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
