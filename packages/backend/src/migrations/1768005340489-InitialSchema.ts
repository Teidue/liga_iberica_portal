import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1768005340489 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Users table
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "nombre" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "rol" character varying NOT NULL,
                CONSTRAINT "UQ_user_email" UNIQUE ("email"),
                CONSTRAINT "PK_user_id" PRIMARY KEY ("id")
            )
        `);

    // Clubs table
    await queryRunner.query(`
            CREATE TABLE "club" (
                "id" SERIAL NOT NULL,
                "nombre" character varying NOT NULL,
                "direccion" character varying NOT NULL,
                "formatoExcel" json,
                CONSTRAINT "PK_club_id" PRIMARY KEY ("id")
            )
        `);

    // Tournaments table
    await queryRunner.query(`
            CREATE TABLE "tournament" (
                "id" SERIAL NOT NULL,
                "nombre" character varying NOT NULL,
                "fechaInicio" TIMESTAMP NOT NULL,
                "fechaFin" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_tournament_id" PRIMARY KEY ("id")
            )
        `);

    // Teams table
    await queryRunner.query(`
            CREATE TABLE "team" (
                "id" SERIAL NOT NULL,
                "nombre" character varying NOT NULL,
                "adminId" integer NOT NULL,
                CONSTRAINT "PK_team_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_team_adminId" FOREIGN KEY ("adminId") REFERENCES "user"("id") ON DELETE CASCADE
            )
        `);

    // Players table
    await queryRunner.query(`
            CREATE TABLE "player" (
                "id" SERIAL NOT NULL,
                "nombre" character varying NOT NULL,
                "documento" character varying NOT NULL,
                "estado" character varying NOT NULL,
                "teamId" integer,
                CONSTRAINT "PK_player_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_player_teamId" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE SET NULL
            )
        `);

    // MatchDays table
    await queryRunner.query(`
            CREATE TABLE "match_day" (
                "id" SERIAL NOT NULL,
                "fecha" TIMESTAMP NOT NULL,
                "tournamentId" integer NOT NULL,
                "clubId" integer NOT NULL,
                CONSTRAINT "PK_match_day_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_match_day_tournamentId" FOREIGN KEY ("tournamentId") REFERENCES "tournament"("id") ON DELETE CASCADE,
                CONSTRAINT "FK_match_day_clubId" FOREIGN KEY ("clubId") REFERENCES "club"("id") ON DELETE CASCADE
            )
        `);

    // TournamentTeams table
    await queryRunner.query(`
            CREATE TABLE "tournament_team" (
                "id" SERIAL NOT NULL,
                "tournamentId" integer NOT NULL,
                "teamId" integer NOT NULL,
                CONSTRAINT "PK_tournament_team_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_tournament_team_tournamentId" FOREIGN KEY ("tournamentId") REFERENCES "tournament"("id") ON DELETE CASCADE,
                CONSTRAINT "FK_tournament_team_teamId" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE
            )
        `);

    // PlayerMatchDay table
    await queryRunner.query(`
            CREATE TABLE "player_match_day" (
                "id" SERIAL NOT NULL,
                "playerId" integer NOT NULL,
                "matchDayId" integer NOT NULL,
                "asistio" boolean NOT NULL,
                CONSTRAINT "PK_player_match_day_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_player_match_day_playerId" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE CASCADE,
                CONSTRAINT "FK_player_match_day_matchDayId" FOREIGN KEY ("matchDayId") REFERENCES "match_day"("id") ON DELETE CASCADE
            )
        `);

    // Payments table
    await queryRunner.query(`
            CREATE TABLE "payment" (
                "id" SERIAL NOT NULL,
                "monto" numeric(10,2) NOT NULL,
                "fecha" TIMESTAMP NOT NULL,
                "playerId" integer NOT NULL,
                CONSTRAINT "PK_payment_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_payment_playerId" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE CASCADE
            )
        `);

    // GuestPersons table
    await queryRunner.query(`
            CREATE TABLE "guest_person" (
                "id" SERIAL NOT NULL,
                "nombre" character varying NOT NULL,
                "documento" character varying NOT NULL,
                "playerId" integer NOT NULL,
                CONSTRAINT "PK_guest_person_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_guest_person_playerId" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE CASCADE
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "guest_person"`);
    await queryRunner.query(`DROP TABLE "payment"`);
    await queryRunner.query(`DROP TABLE "player_match_day"`);
    await queryRunner.query(`DROP TABLE "tournament_team"`);
    await queryRunner.query(`DROP TABLE "match_day"`);
    await queryRunner.query(`DROP TABLE "player"`);
    await queryRunner.query(`DROP TABLE "team"`);
    await queryRunner.query(`DROP TABLE "tournament"`);
    await queryRunner.query(`DROP TABLE "club"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
