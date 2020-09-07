const request = require('request')
const urls = require('../urls/url')
const forecast = (latitude,longitude,callback)=>{
    const url = urls.weatherStackUrl(latitude,longitude)
    request({url,json:true},(error,{body})=>{
          if(error){
           callback('No connection',undefined)
          }else if(body.error){
            callback('please provide a valid location',undefined)
          }else{
            const {weather_descriptions,temperature,feelslike} =body.current
            const str = weather_descriptions+'. It is currently  ' +temperature + ' degrees out. it is feel like  ' +feelslike+ '  degrees out'
            callback(undefined,str)
          }
    })

}




module.exports = forecast