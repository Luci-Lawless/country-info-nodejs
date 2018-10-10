var fs = require ('fs');

const readJsonFile = (jsonFile, callback) => {

	console.log('oi' + jsonFile);
	fs.readFile(jsonFile, (err, data) => {
		if (err) {
			console.log('Not Found!');
			throw err;
		} else {
			const parsed = JSON.parse(data);
			callback (parsed);
		}
	});
}

module.exports = readJsonFile;
