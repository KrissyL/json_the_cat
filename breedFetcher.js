const request = require('request');
const breedName = process.argv.slice(2);

const fetchBreedDescription = (breedName, callback) => {
  const address = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    
  request(address, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback('Breed does not exist');
      return;
    } else {
      const description = data[0].description.trim();
      callback(null, description);
    }
  });
};


module.exports.fetchBreedDescription = fetchBreedDescription;