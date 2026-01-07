import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';
import { Player } from '../../players/entities/player.entity';
import { MatchDay } from '../../match-days/entities/match-day.entity';
import { GuestPerson } from '../../guests/entities/guest-person.entity';

@Unique(['player', 'matchDay'])
@Entity()
export class PlayerMatchDay {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Player, (p) => p.asistencias)
  player: Player;

  @ManyToOne(() => MatchDay, (md) => md.asistencias)
  matchDay: MatchDay;

  @Column()
  va: boolean;

  @ManyToOne(() => GuestPerson, (g) => g.asistencias, { nullable: true })
  invitado: GuestPerson;
}
