import { Tournament } from '../../tournaments/entities/tournament.entity';
import { Club } from '../../clubs/entities/club.entity';
import { PlayerMatchDay } from '../../player-match-day/entities/player-match-day.entity';
export declare class MatchDay {
    id: number;
    fecha: Date;
    tournament: Tournament;
    club: Club;
    asistencias: PlayerMatchDay[];
}
