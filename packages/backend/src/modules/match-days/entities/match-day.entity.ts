import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tournament } from '../../tournaments/entities/tournament.entity';
import { Club } from '../../clubs/entities/club.entity';
import { PlayerMatchDay } from '../../player-match-day/entities/player-match-day.entity';

@Entity()
export class MatchDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Tournament, (t) => t.jornadas)
  tournament: Tournament;

  @ManyToOne(() => Club, (c) => c.jornadas)
  club: Club;

  @OneToMany(() => PlayerMatchDay, (pmd) => pmd.matchDay)
  asistencias: PlayerMatchDay[];
}
