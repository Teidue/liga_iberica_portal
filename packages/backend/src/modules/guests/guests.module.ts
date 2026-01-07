import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestPerson } from './entities/guest-person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuestPerson])],
  exports: [TypeOrmModule],
})
export class GuestsModule {}
