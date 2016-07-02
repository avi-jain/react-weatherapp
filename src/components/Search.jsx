var React = require();

var Search = React.createClass({
    onInputChange : function(e){
        this.setState({input: e.target.value}); 
    },
    onClick : function(e){
        
        this.setState({input:""})
    },
    
    render : function(){
        return(
            
        );
    }
});