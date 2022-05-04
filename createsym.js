// Node.js program to demonstrate the
// fs.symlink() method
  
// Import the filesystem module
const {symlink} = require('fs');
  
symlink("../.././server/container/serv.js",
        "./EncryptionHandler.js", 'file', (err) => {
  if (err) console.log(err.message)
  else console.log("doneeeeeeeee");
}
);

        