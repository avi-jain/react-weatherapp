var React = require('react');

var Search = React.createClass({
    
    render : function(){
        return(
            <div>
                <form>
                    <input type="text"/>
                    <button type ="submit"></button>
                </form>
            </div>
        );
    }
});

module.exports = Search;