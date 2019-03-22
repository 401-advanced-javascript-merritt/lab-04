'use strict';

const fs = require('fs');
/**
 * @param  {}
 * @returns buffer
 */
let populate = () => {
  
  let n = `['tim','jack','joe'].forEach(i=>{console.log(i.toString());});`;
  let j = n.split('');
  let buffer = Buffer.alloc(j.length);
  for (let i = 0; i < j.length; i++){
    buffer.write(j[i], i);
  }
  return buffer;
};

fs.writeFile('../files/loop.js', populate(), (err) => {
  if(!err){
    console.log('file created');
  }
});
