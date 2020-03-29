'use strict';

const fastify = require('fastify')({ logger: true });
const path = require('path');

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/'
});

fastify.get('/', (req, res) => res.sendFile('index.html'));

fastify.listen(3000, '0.0.0.0', ((err, address) => {
    if (err) (fastify.log.error(err), process.exit(1));

    fastify.log.info(`server listening on ${ address }`);
}));
