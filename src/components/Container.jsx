var React = require('react');

var HttpService = require("../services/httpservice.js");
var Day = require("./FutureWeatherItem.jsx");
var Search = require("./Search.jsx");
var Today = require("./TodayWeather.jsx");

var  Container = React.createClass({
    
    getInitialState : function(){
        return (
            {weatherdata: null }
            );
    },
    
    componentWillMount : function(){
        HttpService.get()
        .then(function(jsondata){
            console.log(jsondata);
            this.setState({weatherdata : jsondata});       // Remember this fucking semicolon
            }.bind(this));                                 // Use bind otherwise it'll refer to the function and not the React component 
    },
    
    render: function(){
        if(!this.state.weatherdata){
            return null;
        } // Implement lodash rather than this
        return(
            <div>
                <Search />
                <Today  temp={this.state.weatherdata.main.temp}
                        windSpeed={this.state.weatherdata.wind.speed}
                        windAngle={this.state.weatherdata.wind.deg}
                        icon={this.state.weatherdata.weather[0].icon}
                        iconID={this.state.weatherdata.weather[0].id}
                        iconDesc={this.state.weatherdata.weather[0].description} />
            </div>
        );
    }
});

module.exports = Container;