import { Injectable } from '@nestjs/common';
import { firebaseAdminApp } from '../helpers/firebase.service';

@Injectable()
export class FirebaseAdminService {
  public firestore(): FirebaseFirestore.Firestore {
    return firebaseAdminApp.firestore();
  }

  async getAllDocs(resource: string) {
    const snapshot = await this.firestore().collection(resource).get();

    return snapshot.docs.map((doc) => doc.data());
  }
}
