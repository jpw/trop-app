const fs = require('fs').promises;
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const docsPath = path.join(__dirname, '../', 'trop-docs/DOCS.md')

const getFileContent = async () =>  {
    let content;
    try {
        content = await fs.readFile(docsPath, 'utf-8');
    } catch (err) {
        console.error(err);
    }

    return content;
};

app.get('/', async (req, res, next) => {
    res.send(await getFileContent());
})

app.listen(port, () => console.log(`listening on port ${port}!`));
