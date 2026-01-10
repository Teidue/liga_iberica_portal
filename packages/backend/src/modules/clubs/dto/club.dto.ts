export class CreateClubDto {
  nombre: string;
  direccion: string;
  formatoExcel?: any;
}

export class UpdateClubDto {
  nombre?: string;
  direccion?: string;
  formatoExcel?: any;
}
