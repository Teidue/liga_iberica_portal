import { User } from '../../users/entities/user.entity';
import { Player } from '../../players/entities/player.entity';
import { TournamentTeam } from '../../tournament-teams/entities/tournament-team.entity';
export declare class Team {
    id: number;
    nombre: string;
    admin: User;
    players: Player[];
    torneos: TournamentTeam[];
}
