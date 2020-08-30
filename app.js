const request = require('request')
const urls = require('./urls/url')


const wUrl = urls.weatherStackUrl()


request({url:wUrl,json:true},(error,response)=>{
    if(error){
      console.log('Unable to connect to server');
    }else if(response.body.error){
      console.log('Please provide a valid location');
    }else{
      const data = response.body.current
      console.log(data.weather_descriptions+'. It is currently  ' +data.temperature + ' degrees out. it is feel like  ' +data.feelslike+ '  degrees out');
    }
  
})

const mUrl = urls.mapBoxUrl()
request({url:mUrl,json:true},(error,response)=>{
    if(error){
          console.log('can\'t connect to server ');
    }else if(response.body.features.length === 0){
          console.log('oops! No location found');
    }else{
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
         console.log('latitude: '+latitude  +'  longitude:  ' + longitude)
    }
    
}
)

