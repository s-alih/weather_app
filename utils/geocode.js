const request = require('request')
const urls = require('../urls/url')
const geocode = (address,callback)=>{
    const url = urls.mapBoxUrl(address)
    request({url:url,json:true},(error,response)=>{
      if(error){
       callback('can\'t connected to server',undefined);
    }else if(response.body.features.length === 0){
        callback('No place found',undefined);
    }else{
        callback(undefined,{
           latitude:response.body.features[0].center[1],
           longitude:response.body.features[0].center[0],
           location:response.body.features[0].place_name
        })
    }
    })
  }

  module.exports = geocode