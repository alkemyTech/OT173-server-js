const jwt = require("jsonwebtoken");

const bearerToken = (authorization) => authorization.split(" ")[1];

module.exports = {
    createToken : ( user ) => jwt.sign(user, "secretKey", { expiresIn: "1h" }),
    verifyToken : ( authorization ) => {
        const token = bearerToken(authorization)
        return jwt.verify(token, "secretKey")}
}