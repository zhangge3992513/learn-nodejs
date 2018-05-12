const logSymbols = require('log-symbols');
 
console.log(logSymbols.success, 'Finished successfully!');
console.log(logSymbols.info, 'Finished info!');
console.log(logSymbols.warning, 'Finished warning!');
console.log(logSymbols.error, 'Finished error!');
// On good OSes:  âœ” Finished successfully!
// On Windows:    âˆš Finished successfully!
console.error(123);
