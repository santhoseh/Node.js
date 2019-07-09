var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This Coding Accelerator program is an intensive training on full-stack development with server-side Node.js and modern, client-side, front-end libraries and frameworks.Throughout this intensive course the student will study professional software development techniques and practices as he/she advances his/her skills on JavaScript.', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
