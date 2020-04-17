import React from 'react';


class NameComponent extends React.Component{    
    render(){
        var Name ="Raju";
        return(            
                <h1>Hello {Name} </h1>            
        )
    }
}

export default NameComponent