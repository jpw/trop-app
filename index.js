const fs = require('fs').promises;
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const docsPath = path.join(__dirname, '../', 'trop-docs/DOCSs.md')

const getFileContent = async () =>  {
    let content;
    try {
        content = await fs.readFile(docsPath, 'utf-8');
    } catch (err) {
        content = err;
    }
    return content;
};

app.get('/', async (req, res, next) => {
    const readResult = await getFileContent();
    if (readResult instanceof Error) {
        next(readResult)
    }
    else {
        res.send(readResult);
    }
})

app.listen(port, () => console.log(`listening on port ${port}!`));
