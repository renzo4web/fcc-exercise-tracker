import { Transform } from 'class-transformer';
import uniqid from 'uniqid';

export class CreateExerciseDto {
  username: string;
  description: string;
  duration: number;
  //@Transform(({ value }) => new Date().toISOString())
  date: string;
  //@Transform(() => uniqid())
  _id: string;
}
