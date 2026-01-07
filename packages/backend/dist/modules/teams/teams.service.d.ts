import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
export declare class TeamsService {
    private repo;
    constructor(repo: Repository<Team>);
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team | null>;
    create(data: any): Promise<Team[]>;
    update(id: number, data: any): Promise<Team | null>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
