const fs = require('fs');
require('log-timestamp');

const folder = '../folder';

console.log(`Watching for file changes on ${folder}`);

fs.watch(folder, (event, filename) => {
  if (filename) {
    console.log(`${filename} file Changed and ${event}`);
	if (event === 'rename'){
	    console.log(event);
	    let name = filename;
	    if (name.endsWith(".cpp")){
		appendCpp(folder + '/' + filename);
		}		
	}
  }
});

const appendCpp = (filename) => {
	fs.appendFile(filename, 
		'#include<iostream>\n\nusing namespace std; \n \nint main(){\n\n\treturn 0;\n}', function (err) {
	  if (err) {
		console.log(err);
	 }
	  console.log('Saved!');
	});
}