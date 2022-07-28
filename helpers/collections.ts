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
 * @private
 */
function getCollection(db: Firestore, collectionName: string): Promise<QuerySnapshot<DocumentData>> {
    const teams = db.collection(collectionName).get();
    return teams;
}

/**
 * Search Team from (Team Name) collection with provided Team Name
 * @param db Firestore database
 * @param teamName Name of team to seach for
 * @returns Promise with team document ID 
 */
export async function findTeamByName(db: Firestore, teamName: string): Promise<string> {
    console.log("Searching for team: ", teamName);
    const teams = await getCollection(db, "Team Name"); 
    for (const team of teams.docs) {
        if (team.data().teamName as string === teamName) {
            return Promise.resolve(team.id);
        }
    }
    return Promise.reject("Team not found");
}

/**
 * Search Team from (Team Name) collection with provided Team ID
 * @param db Firestore database
 * @param teamID Team ID to seach for
 * @returns Promise with team document ID 
 */
export async function findTeamByID(db: Firestore, teamID: string): Promise<string> {
    console.log("searching for teamID: ", teamID);
    const teams = await getCollection(db, "Team Name");
    for (const team of teams.docs) {
        if (team.data().id as string === teamID) {
            return Promise.resolve(team.id);
        }
    }
    return Promise.reject("Team not found");
}