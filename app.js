const urls = require('./urls/url')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const place =  process.argv[2]


if(!place){
 console.log('please provide a valid place macha');
}else{
  geocode(place,(error,{latitude,longitude,location}={})=>{
    if(error){
      return console.log(error);
    }
    forecast( latitude,longitude, (error, forecastData) => {
      if(error){
        return console.log(error);
      }
     console.log(location);
     console.log(forecastData);
    })
  })
}



