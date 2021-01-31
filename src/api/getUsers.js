const sendResponse = require("../services/sendResponse.js");
const getAllUsers = require("../services/getAllUsers.js");
const getSpecificUser = require("../services/getSpecificUser.js");
module.exports = (request, response) => {
    const userId = request.query.id;
    response.set({
        "Access-Control-Allow-Origin": "*"
    });
    if (userId === undefined || userId === null || userId === "") {
        getAllUsers((error, allUsers) => {
            if (error) sendResponse(response, error);
            else response.json(allUsers);
        });
    } else {
        if (isNaN(userId)) sendResponse(response, 400);
        else if (userId < 0) sendResponse(response, 400);
        else getSpecificUser(userId, (error, user) => {
            if (error) sendResponse(response, error);
            else {
                response.json(user);
            }
        });
    }
}
