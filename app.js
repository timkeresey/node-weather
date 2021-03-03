const request = require('request');

const weatherUrl = 'http://api.weatherstack.com/current?access_key=3ac674cb59632611eb4e01f113be8450&query=37.8267,-122.4233';
const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGlta2VyZXNleSIsImEiOiJja2x0djV4M2wwNnl1MnVvM2J0eXQ0OG1rIn0.SMC97ZL4SdSxne1xVO2OZA'

request({ url: weatherUrl, json: true }, (error, response) => {
   if (error) {
        console.log('Unable to connect to weather service');
   } else if (response.body.error) {
        console.log('Unable to find location');
   } else {
        const data = response.body;   
        console.log(data);
   }
})

// request({ url: locationUrl, json: true }, (error, response) => {
//     const data = response.body.features[0];
//     const latitude = data.center[0];
//     const longitude = data.center[1];
    
//     console.log(`the latitude is ${latitude}, and longitude is ${longitude}`);
// })