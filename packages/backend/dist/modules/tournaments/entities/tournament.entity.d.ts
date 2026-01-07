import { MatchDay } from '../../match-days/entities/match-day.entity';
import { TournamentTeam } from '../../tournament-teams/entities/tournament-team.entity';
export declare class Tournament {
    id: number;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    jornadas: MatchDay[];
    equipos: TournamentTeam[];
}
