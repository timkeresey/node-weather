const request = require('request');

const geocode = require('./utils/geocode');

const weatherUrl = 'http://api.weatherstack.com/current?access_key=3ac674cb59632611eb4e01f113be8450&query=37.8267,-122.4233';
const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Denver.json?access_token=pk.eyJ1IjoidGlta2VyZXNleSIsImEiOiJja2x0djV4M2wwNnl1MnVvM2J0eXQ0OG1rIn0.SMC97ZL4SdSxne1xVO2OZA'

// request({ url: weatherUrl, json: true }, (error, response) => {
//    if (error) {
//         console.log('Unable to connect to weather service');
//    } else if (response.body.error) {
//         console.log('Unable to find location');
//    } else { 
//         const temp = response.body.current.temperature;
//         console.log(`The temperature right now is ${temp} degrees`);
//    }
// })

// request({ url: locationUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service')
//     } else if (response.body.features.length === 0) {
//         console.log('No location results found');
//     } else {
//         const data = response.body.features[0];
//         const latitude = data.center[0];
//         const longitude = data.center[1];
        
//         console.log(`the latitude is ${latitude}, and longitude is ${longitude}`);
//     }    
// })


geocode('santa fe nm', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})