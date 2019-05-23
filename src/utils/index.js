const logger = (write_log) => console.log(`${process.env['DEBUG'] ? '[DEBUG] ' : ''}${write_log}`);
const upperStr = (str) => String(str).toUpperCase();

module.exports = { logger, upperStr };