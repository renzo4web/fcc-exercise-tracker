import { Inject, Injectable } from '@nestjs/common';
import uniqid from 'uniqid';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExerciseService {
  @Inject()
  readonly firebaseAdminService: FirebaseAdminService;

  async create(createExerciseDto: CreateExerciseDto) {
    const data: CreateExerciseDto = {
      ...createExerciseDto,
      date: !!createExerciseDto?.date
        ? createExerciseDto.date
        : new Date().toISOString(),
      _id: uniqid(),
    };

    await this.firebaseAdminService
      .firestore()
      .collection('exercise')
      .add(data);

    return data;
  }

  findAll() {
    return this.firebaseAdminService.getAllDocs('exercise');
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
