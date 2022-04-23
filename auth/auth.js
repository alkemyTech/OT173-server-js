const jwt = require("jsonwebtoken");

module.exports = {
    createToken : ( user ) => jwt.sign(user, "secretKey", { expiresIn: "1h" }),
    verifyToken : ( token ) => jwt.verify(token, "secretKey"),
    bearerToken : (authorization) => {
        try {
            const token = authorization.split(" ")[1]
            return token;
        } catch (error) {
            return error;
        }
    }
}