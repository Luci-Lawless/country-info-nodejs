var fs = require ('fs'); 

function fileReader (filename, callback) {
	fs.readFile(filename, 'utf-8', function (err, data) {
		if (err) {
			console.log ('Not found!')
			throw err;
		}
		else
			var parsedFile = JSON.parse(data);
			callback (parsedFile);
		})
}

module.exports = fileReader;
