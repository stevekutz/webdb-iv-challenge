const server = require('./server.js');

const port = 5005;

server.listen(port, () => {
    console.log(`\n >>>> Challenge iv listening on http://localhost:${port}`);
})