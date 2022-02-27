
const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=fbba9535052d57d4964de340e86e3811&query=37.8267,-122.4233&units=f'
const uri = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxpaGFpZGVyMDM0OSIsImEiOiJja3h2a244c3cxMmFkMzBwZHd5c2xoMWpyIn0.VGrluF4LGeBJi3MCJbQSxw&limit=1'
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("unable to connect to server");
//     } else if (response.body.error) {
//         console.log('there is something wrong in address');
//     } else {
//         console.log("it is currently " + response.body.current.temperature + " degrees out.It feels like " + response.body.current.precip + " degress out")
//     }

// })

request({ url: uri, json: true }, (error, response) => {
    if (error) {
        console.log("unable to connect to server");

    } else if (response.body.features.length === 0) {
        console.log('unable to find location  try another search');
    } else {
        console.log("longitude" + response.body.features[0].center[0])
        console.log("latitude" + response.body.features[0].center[1])

    }
})



console.log();