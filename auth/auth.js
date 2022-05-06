const jwt = require("jsonwebtoken");

module.exports = {
    createToken: (user) => {
        try {
            if (user) {
                let token = jwt.sign({user}, "secretKey", { expiresIn: "1h" })

                if (!token.error) {
                    return {
                        token,
                        msg: "Token created successfully.",
                        ok: true
                    }
                }
                return {
                    token,
                    msg: "The parameter is undefined or does not have the proper form.",
                    param: user,
                    ok: false
                }
            }
        } catch (error) {
            return {
                error,
                msg: "The parameter is undefined or does not have the proper form.",
                method: "createToken",
                param: user,
                ok: false
            }
        }
    },
    verifyToken: (data) => {
        try {
            let verify = jwt.verify(data, "secretKey")

            if (verify?.error?.JsonWebTokenError) {
                return {
                    verify,
                    msg: "The parameter is undefined or does not have the proper form.",
                    param: data,
                    ok: false
                }
            }
            return {
                verify,
                msg: "verification successfully.",
                ok: true
            }

        } catch (error) {
            return {
                error,
                msg: "The parameter is undefined or does not have the proper form.",
                method: "verifyToken",
                param: data,
                ok: false
            }
        }
    },
    bearerToken: (authorization) => {
        try {
            const splitAuth = typeof authorization === "string" && authorization.split(" ")
            if (authorization && splitAuth && splitAuth[0] === "bearer") {
                const token = splitAuth[1]

                return {
                    token,
                    msg: "Operation successfully",
                    ok: true
                };
            }

            return {
                msg: "The parameter is undefined or does not have the proper form.",
                param: authorization,
                ok: false
            }

        } catch (error) {
            return {
                error,
                msg: "The parameter is undefined or does not have the proper form.",
                method: "bearerToken",
                param: authorization,
                ok: false
            };
        }
    }
}