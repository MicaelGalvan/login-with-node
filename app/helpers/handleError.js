const { logger } = require("../helpers/logging");

const httpError = (res, err) => {
    const message = err?.message || "ERROR NOT SPECIFIED";
    const status = err?.status || 500;
    console.log(err);
    res.status(status).json({ error: message });
    logger.child({ context: { status: status } }).error(message);
}

module.exports = { httpError };

