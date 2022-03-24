const jwt = require('jsonwebtoken');

module.exports = {
    varifyAuth(req,res,next) {
        const token = req.headers["x-access-token"];

        if(!token) {
            res.send("No token found")
        } else {
            jwt.verify(token, process.env.ACCESS_TOKEN, (error,decoded) => {
                if(error) {
                    res.json({
                        auth: false,
                        error
                    })
                } else {
                    next()
                }
            })
        }
    }
}
