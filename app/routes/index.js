const express = require('express');
const router = express.Router();
const fs = require('fs');
const { httpError } = require("../helpers/handleError");

const pathRouter = `${__dirname}`;
const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExt = removeExtension(file);
    const skip = ['index'].includes(fileWithoutExt);

    if (!skip) router.use(`/${fileWithoutExt}`, require(`./${fileWithoutExt}`));
});


router.get('*', (req, res) => {
    res.status(404);
    res.send({ error: 'Not Found' });
    httpError(res, { message: 'Not Found', status: 404 });
})

module.exports = router;