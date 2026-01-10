import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubDto, UpdateClubDto } from './dto/club.dto';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  findAll() {
    return this.clubsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clubsService.findOne(Number(id));
  }

  @Post()
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubsService.create(createClubDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClubDto: UpdateClubDto) {
    return this.clubsService.update(Number(id), updateClubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clubsService.remove(Number(id));
  }
}
