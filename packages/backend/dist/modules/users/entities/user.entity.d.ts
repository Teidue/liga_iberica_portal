import { Team } from '../../teams/entities/team.entity';
export declare enum UserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    TEAM_ADMIN = "TEAM_ADMIN"
}
export declare class User {
    id: number;
    nombre: string;
    email: string;
    password: string;
    rol: UserRole;
    teamsManaged: Team[];
}
