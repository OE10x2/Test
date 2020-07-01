const Logger = require('./index.js');
const logger = new Logger();
logger.on('message', (data) => console.log('Called listener:', data));
logger.log('Hello World');
logger.log('Second message');
logger.log('Each message has a different ID');