var React = require('react');

var Today = React.createClass({
    
    render : function(){
        return(
            <div>
                <p> {this.props.temp} </p>
                <img src = {"http://openweathermap.org/img/w/" + this.props.icon + ".png"} /> {/*Nice Trick*/}
            </div>
        );
    }
});

module.exports = Today;
