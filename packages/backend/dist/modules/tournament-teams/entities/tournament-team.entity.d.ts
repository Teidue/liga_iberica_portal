import { Tournament } from '../../tournaments/entities/tournament.entity';
import { Team } from '../../teams/entities/team.entity';
import { Payment } from '../../payments/entities/payment.entity';
export declare class TournamentTeam {
    id: number;
    tournament: Tournament;
    team: Team;
    montoInscripcion: number;
    pagos: Payment[];
}
