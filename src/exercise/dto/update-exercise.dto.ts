import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { CreateExerciseDto } from './create-exercise.dto';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  username: string;
  description: string;
  duration: number;
  date: string;
  _id: string;
}
