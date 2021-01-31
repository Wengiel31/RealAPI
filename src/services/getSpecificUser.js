const fs = require("fs");
const path = require("path");
/**
 * Returns a specific user object in a callback
 * @param {Number} userId - ID of the user
 * @param {Function} callback - Callback
 * @returns {Object} user - User object
 */
module.exports = (userId, callback) => {
    const userFilePath = path.join(__dirname, "..", "config", "users.json");
    fs.readFile(userFilePath, {
        encoding: "utf-8"
    }, (error, users) => {
        if (error) callback(500, undefined);
        else {
            users = JSON.parse(users);
            if (users[userId]) {
                if (!users[userId].private.deleted) {
                    delete users[userId].private;
                    callback(undefined, users[userId]);
                } else callback(404, undefined);
            } else callback(404, undefined);
        }
    });
}
