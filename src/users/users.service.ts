import { forwardRef, Inject, Injectable } from '@nestjs/common';
import uniqid from 'uniqid';
import { CreateExerciseDto } from '../exercise/dto/create-exercise.dto';
import { ExerciseModule } from '../exercise/exercise.module';
import { ExerciseService } from '../exercise/exercise.service';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LogReponseDto } from './dto/log-response.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  @Inject()
  readonly firebaseAdminService: FirebaseAdminService;

  @Inject(forwardRef(() => ExerciseService))
  readonly exerciseService: ExerciseService;

  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      _id: uniqid(),
    };

    await this.firebaseAdminService.firestore().collection('users').add(user);

    return user;
  }

  async findAll() {
    return this.firebaseAdminService.getAllDocs('users');
  }

  async findOne(id: string) {
    const userRef = await this.firebaseAdminService
      .firestore()
      .collection('users')
      .where('_id', '==', id)
      .get();

    return userRef.docs.map((doc) => doc.data());
  }

  async findOneLog(id: string): Promise<LogReponseDto> {
    const user = await this.findOne(id);
    // TODO: change to findAll
    const exercises = await this.exerciseService.findOne(id);

    console.log('>>>>>>>', exercises);

    return {
      ...user[0],
      count: exercises.length,
      log: exercises.map(({ _id, ...rest }) => rest) as CreateExerciseDto[],
    } as any;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
