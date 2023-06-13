const os = require('os');
console.log(os.arch()); //architecture
console.log(os.freemem()/(1024*1024*1024));   //free ram
console.log(os.totalmem()/(1024*1024*1024)); //total ram
console.log(os.hostname()); //pc name
console.log(os.version()); //os version
console.log(os.platform());// win32
console.log(os.userInfo()); 
