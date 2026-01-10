import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MatchDay } from '../../match-days/entities/match-day.entity';

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column({ type: 'json', nullable: true })
  formatoExcel: any;

  @OneToMany(() => MatchDay, (md) => md.club)
  jornadas: MatchDay[];
}
