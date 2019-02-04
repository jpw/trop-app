const fs = require('fs').promises;
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const docsPath = path.join(__dirname, '../', 'trop-docs/DOCS.md')

app.get('/', async (req, res, next) => {
    try {
        const content = await fs.readFile(docsPath, 'utf-8');
        res.send(content);
    } catch (err) {
        next(err);
    }
})

app.listen(port, () => console.log(`listening on port ${port}!`));
