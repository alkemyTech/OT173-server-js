const express = require("express");
const router = express.Router();
const httpCodes = require("../constants/constants");

router.post("/", (req, res) => {

    const { name, content } = req.body;

    if (name && content) {
        Activity.create({ name, content })
            .then(response => {
                const confirm = {}

                switch (typeof response != "undefined") {
                    case response === 1:
                        confirm = {
                            msg: "Activity created successfully.",
                            url: "http://localhost/activities"
                        }
                        res.status(httpCodes.OK).json(confirm)
                    default:
                        confirm = {
                            msg: "An error occurred. Try again.",
                            url: "http://localhost/activities"
                        }
                        res.status(httpCodes.BAD_REQUEST).json(confirm);
                }
            })
            .catch(err => res.status(httpCodes.FORBIDDEN).json(err))
    } else {
        res.status(httpCodes.NOT_FOUND).json("You must enter name and content fields.")
    }
})