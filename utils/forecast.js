const request = require('request')
const urls = require('../urls/url')
const forecast = (latitude,longitude,callback)=>{
    const url = urls.weatherStackUrl(latitude,longitude)
    request({url:url ,json:true},(error,response)=>{
          if(error){
           callback('No connection',undefined)
          }else if(response.body.error){
            callback('please provide a valid location',undefined)
          }else{
            const data = response.body.current
            const str = data.weather_descriptions+'. It is currently  ' +data.temperature + ' degrees out. it is feel like  ' +data.feelslike+ '  degrees out'
            callback(undefined,str)
          }
    })

}

module.exports = forecast