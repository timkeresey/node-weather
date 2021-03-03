const request = require('request');

const geocode = (address, callback) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGlta2VyZXNleSIsImEiOiJja2x0djV4M2wwNnl1MnVvM2J0eXQ0OG1rIn0.SMC97ZL4SdSxne1xVO2OZA`;

    request({ url: geocodeUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect ot location services', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    });
}

module.exports = geocode;