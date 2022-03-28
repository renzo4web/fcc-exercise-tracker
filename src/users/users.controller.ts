import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateExerciseDto } from '../exercise/dto/create-exercise.dto';
import { ExerciseService } from '../exercise/exercise.service';

@Controller('users')
export class UsersController {
  @Inject()
  readonly usersService: UsersService;

  @Inject()
  readonly exerciseService: ExerciseService;

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post(':id/exercise')
  async createExercise(
    @Param('id') id: string,
    @Body() createDto: CreateExerciseDto,
  ) {
    return await this.exerciseService.create({
      ...createDto,
      _id: id,
    });
  }

  @Get(':id/logs')
  async findLogs(@Param('id') id: string) {
    return await this.usersService.findOneLog(id);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
