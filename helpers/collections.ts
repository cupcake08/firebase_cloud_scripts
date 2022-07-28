/**
 * @file Manages Collections Data 
 * @author Ankit Bhankharia <bhankhariaa@pm.me>
 */
import { DocumentData, Firestore, QuerySnapshot } from "./types";

/**
 * Gets the data from the provided collectionName
 * @param {Firestore} db Firestore database
 * @param {string} collectionName Name of Collection to get data from
 * @returns Promise of QuerySnapshot of Data from Collection 
 */
export async function getCollection(db: Firestore, collectionName: string): Promise<QuerySnapshot<DocumentData>> {
    const teams = await db.collection(collectionName).get();
    return teams;
}