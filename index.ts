import { SearchOptions, TeamSearchOptions, UserSearchOptions } from './enums/enums';
import { app } from './helpers/app_initialization';
import { findTeamByID, findTeamByName } from './helpers/collections';

const args = process.argv;

if (args.length < 6) {
    console.error("Wrong Command");
    process.exit();
}

if (args[2] != "search") {
    console.error(`try to use 'search' instead of ${args[1]}`);
    process.exit();
}

if (args[3] in SearchOptions) {
    if (args[3] === "Team") {
        console.log("Team Search");
        if (args[4] in TeamSearchOptions) {
            if (args[4] === "ID") {
                findTeamByID(app.firestore(), args[5])
                    .then(snapshot => {
                        console.log("Firebase Document ID: ", snapshot);
                    })
                    .catch(err => {
                        console.log('Error: ', err);
                    });
            } else if (args[4] === "Name") {
                findTeamByName(app.firestore(), args[5])
                    .then(snapshot => {
                        console.log("Firebase Document ID: ", snapshot);
                    })
                    .catch(err => {
                        console.log('Error: ', err);
                    });
            }
        } else {
            console.error(`try to use 'ID' or 'Name' instead of ${args[4]}`);
            process.exit();
        }
    } else if (args[3] === "User") {
        console.log("User Search");
        if (args[4] in UserSearchOptions) {
            console.log("User Search is Not implemented yet");
            process.exit();
            // if (args[4] === "Name") {
            //     console.log("User Search by Name");
            // } else if (args[4] === "PhoneNumber") {
            //     console.log("User Search by PhoneNumber");
            // }
        } else {
            console.error(`try to use 'Name' or 'PhoneNumber' instead of ${args[4]}`);
            process.exit();
        }
    }
} else {
    console.error("search not found!");
    console.log("Available options are [team] and [user]")
    process.exit();
}






