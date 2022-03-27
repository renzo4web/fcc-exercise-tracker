import * as admin from 'firebase-admin';
import * as dotEnv from 'dotenv';
dotEnv.config();

export const firebaseOptions = {
  type: process.env.FIREBASE_TYPE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  clientId: process.env.FIREBASE_CLIENT_ID,
  authUri: process.env.FIREBASE_AUTH_URI,
  tokenUri: process.env.FIREBASE_TOKEN_URI,
  authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  clientC509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
};

export const firebaseAdminApp = admin.initializeApp({
  credential: admin.credential.cert(firebaseOptions),
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
});
