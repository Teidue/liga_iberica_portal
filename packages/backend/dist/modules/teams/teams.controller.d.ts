import { TeamsService } from './teams.service';
export declare class TeamsController {
    private readonly service;
    constructor(service: TeamsService);
    findAll(): Promise<import("./entities/team.entity").Team[]>;
    findOne(id: number): Promise<import("./entities/team.entity").Team | null>;
    create(body: any): Promise<import("./entities/team.entity").Team[]>;
    update(id: number, body: any): Promise<import("./entities/team.entity").Team | null>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
