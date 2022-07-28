/**
 * @file [helpers/types.ts] Big Types for the app 
 * @author Ankit Bhankharia <bhankhariaa@pm.me>
 */
import { admin } from "./app_initialization";

type Firestore = admin.firestore.Firestore;
/**
 * Note: Dont forget to pass the type inside <> 
 */
type QuerySnapshot<T> = admin.firestore.QuerySnapshot<T>;

type DocumentData = admin.firestore.DocumentData;

export { Firestore, QuerySnapshot, DocumentData };