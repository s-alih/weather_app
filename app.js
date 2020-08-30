const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b5c9f47b39a65e7a0f2a33c67c7fab32&query=10.876440,76.304207&units=f'

request({url:url,json:true},(error,response)=>{
   const data = response.body.current
   console.log(data.weather_descriptions+'. It is currently  ' +data.temperature + ' degrees out. it is feel like  ' +data.feelslike+ '  degrees out');
})