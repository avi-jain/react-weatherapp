var React = require("react");

var Item = React.createClass({
    render : function(){
        return(
        <li> 
            <h4>{this.props.ingredient} </h4>
        </li>
        
        );
        
    }
});
        
module.exports = ListItem;
