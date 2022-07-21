module.exports = async (client) => {
  process.on('unhandledRejection', (reason, p) => {
       console.log('Unhandled Rejection/Catch');
       console.log(reason, p);
   });
   process.on("uncaughtException", (err, origin) => {
       console.log('Uncaught Exception/Catch');
       console.log(err, origin);
   }) 
   process.on('uncaughtExceptionMonitor', (err, origin) => {
       console.log('Uncaught Exception/Catch (MONITOR)');
       console.log(err, origin);
   });
}