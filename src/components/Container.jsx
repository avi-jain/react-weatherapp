var React = require("react");
var Day = require("./Day.jsx");
var Search = require("./Search.jsx");

var  Container = React.createClass({
    
    getInitialState : function(){
        
    },
    componentWillMount : function(){
        
    },
    
    render: function(){
        
        return(
            <div>
                <Search />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
        );
    }
});

module.exports = Container;