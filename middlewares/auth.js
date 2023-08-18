const { StatusCodes } = require("http-status-codes");

const auth =(req,res,next) =>{
    const name = req.headers.name;
    if (!name|| name!=='rim') {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('you are not connect')
    }
    next()
}

module.exports = auth