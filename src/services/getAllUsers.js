const fs = require("fs");
const path = require("path");
/**
 * Returns all users array in a callback
 * @param {Function} callback - Callback
 * @returns {Array} allUsers - All users array
 */
module.exports = callback => {
    const userFilePath = path.join(__dirname, "..", "config", "users.json");
    fs.readFile(userFilePath, {
        encoding: "utf-8"
    }, (error, users) => {
        if (error) callback(500, undefined);
        else {
            users = JSON.parse(users);
            let lap = 0;
            users.forEach(user => user.private.deleted ? users.splice(lap, 1) : undefined);
            users.forEach(user => delete user.private);
            callback(undefined, users);
        }
    });
}
