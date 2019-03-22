'use strict';

const fs = require('fs');

/**
 * @param  {} 
 * @param  {}
 * @returns writes a file
 */
let populate = () => {
  let res= '<article>';
  
  let lineReader = require('readline').createInterface({
    input: fs.createReadStream(`../files/pair-programming.txt`),
  });
  
  lineReader.on('line', function(line) {
    if(line.slice(-1)=== '.'){res+= `<li>`+ line + `</li>\n`;}
    else if(line.charAt(1)=== '.'){res+= `<h3>`+ line + `</h3>\n`;}
    else if(!line.charAt(1)){res+= `\n`;}
    else{res+= `<h2>`+ line +`</h2>\n`;}


    fs.writeFile('../files/pair-programming.html', res+`</article>`, (err) =>{
      if(err){console.log(err);}
    });
  });
  console.log('success');
};

populate();


