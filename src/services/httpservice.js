var Fetch = require('whatwg-fetch');
var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=871d7298c8af04605897eae99b239cef"; // APPEND HTTP://

var service = {
    get: function(){
        return fetch(baseURL) //returns a JS promise
        .then(function(response){   //this is the JS promise
           return response.json();  // Will exclude stuff like headers
        });
    }
};

module.exports = service;