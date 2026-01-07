import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PlayerMatchDay } from '../../player-match-day/entities/player-match-day.entity';

@Entity()
export class GuestPerson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  documento: string;

  @Column({ nullable: true })
  notas: string;

  @OneToMany(() => PlayerMatchDay, (pmd) => pmd.invitado)
  asistencias: PlayerMatchDay[];
}
