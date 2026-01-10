export class CreateTeamDto {
  nombre: string;
  adminId: number;
}

export class UpdateTeamDto {
  nombre?: string;
  adminId?: number;
}
