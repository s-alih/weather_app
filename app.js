const request = require('request')
const urls = require('./urls/url')


const url = urls()


request({url:url,json:true},(error,response)=>{
    debugger
   const data = response.body.current
   console.log(data.weather_descriptions+'. It is currently  ' +data.temperature + ' degrees out. it is feel like  ' +data.feelslike+ '  degrees out');
})