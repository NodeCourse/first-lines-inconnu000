const fs = require('fs');
setInterval(Write, 1000);

function Write(){
    const timeStamp = Date.now();
    console.log(timeStamp);

    fs.appendFileSync('message.txt', timeStamp + "\n");
}


