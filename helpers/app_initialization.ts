/**
 * @file [helpers/types.ts] Initialize the app 
 * @author Ankit Bhankharia <bhankhariaa@pm.me>
 */
import * as admin from 'firebase-admin';
import serviceAccount from '../service-account';

/**
 * Initialize the Firebase Admin SDK.
 */
const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});


export {app,admin};