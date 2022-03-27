import { Injectable } from '@nestjs/common';
import { firebaseAdminApp } from '../helpers/firebase.service';

@Injectable()
export class FirebaseAdminService {
  public firestore(): FirebaseFirestore.Firestore {
    return firebaseAdminApp.firestore();
  }
}
