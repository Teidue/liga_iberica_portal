import { Team } from '../../teams/entities/team.entity';
import { PlayerMatchDay } from '../../player-match-day/entities/player-match-day.entity';
export declare class Player {
    id: number;
    nombre: string;
    documento: string;
    estado: boolean;
    team: Team;
    asistencias: PlayerMatchDay[];
}
