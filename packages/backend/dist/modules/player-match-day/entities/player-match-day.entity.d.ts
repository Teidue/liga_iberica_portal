import { Player } from '../../players/entities/player.entity';
import { MatchDay } from '../../match-days/entities/match-day.entity';
import { GuestPerson } from '../../guests/entities/guest-person.entity';
export declare class PlayerMatchDay {
    id: number;
    player: Player;
    matchDay: MatchDay;
    va: boolean;
    invitado: GuestPerson;
}
