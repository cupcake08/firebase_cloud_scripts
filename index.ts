import { app } from './helpers/app_initialization';
import { getCollection } from './helpers/collections';

/**
 * @file helpers/collections.ts
 * @function getCollection
 */
const teams = getCollection(app.firestore(), "Team Detail");

teams
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        })
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });

console.log("Done");
