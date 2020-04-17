import React from 'react';
import NameComponent from './NameComponent';

class UserComponent extends React.Component{    
    render(){
        var Name ='vamshi';
        return(
            <div>
                <NameComponent/>
            </div>
        )
    }
}

export default UserComponent