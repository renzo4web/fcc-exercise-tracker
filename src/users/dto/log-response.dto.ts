import { CreateExerciseDto } from '../../exercise/dto/create-exercise.dto';

export class LogReponseDto {
  username: string;
  count: number;
  _id: string;
  log: CreateExerciseDto[];
}
