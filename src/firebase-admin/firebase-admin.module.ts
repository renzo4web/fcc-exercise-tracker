import { Module } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';

@Module({
  providers: [FirebaseAdminService],
})
export class FirebaseAdminModule {}
