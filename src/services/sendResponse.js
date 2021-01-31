const process = require("process");
const statusMessages = require("../config/statusMessages.json");
/**
 * 
 * @param {Express.Response} response 
 * @param {Number} code - Response status code
 */
module.exports = (response, code) => {
    response.status(code).end(statusMessages[code], process.env.ENCODING);
}
