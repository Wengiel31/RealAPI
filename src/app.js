const express = require("express");
const dotenv = require("dotenv");
const getUsers = require("./api/getUsers.js");
const dotenvResult = dotenv.config();
if (dotenvResult.error) throw dotenvResult.error;
else {
    const app = express();
    app.get("/users", getUsers);
    app.listen(process.env.PORT, () => console.log(`The server has started listening on port: ${process.env.PORT}`));
}
