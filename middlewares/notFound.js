const { StatusCodes } = require("http-status-codes")

const notFound =(req , res) => res.status(StatusCodes.NOT_FOUND).send('this route does not exist');

module.exports = notFound