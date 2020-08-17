const express = require('express');
const router = express.Router();
const {join} = require('path');
const {existsSync} = require('fs');
const {readFile} = require('fs').promises;
const configDirectory = join(__dirname, '../ui-config');

router.get('/', ((req, res) => {
    res.send('Welcome to Trade backend');
}));

router.get('/get_meta_data/:module_name/:screen_name', ((req, res) => {
    let moduleName = req.params.module_name;
    let screenName = req.params.screen_name;
    let configFilePath = `${configDirectory}/${moduleName}/${screenName}.json`;
    if (existsSync(configFilePath)) {
        readFile(configFilePath)
            .then(value => res.send(JSON.parse(value)))
            .catch(error => res.send(error));
    } else {
        res.status(404).send({
            msg: 'Config not found'
        });
    }

}));

module.exports = router;