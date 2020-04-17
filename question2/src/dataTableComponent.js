import React from 'react';

class DataTableComponent extends React.Component{
    render(){
        return(
            <div id="data-table">
                    <table border="1">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>scrum master</th>
                            <th>Team member</th>
                            <th></th>
                          
                        </tr>
                        <tr>
                            <td>1001</td>
                            <td>Vamshi</td>
                            <td>React component test</td>
                            <td>6</td>
                            <td><a href="">Edit</a>|<a href="">Delete</a></td>
                           
                        </tr>
                    </table>
                </div>
        )
    }
}

export default DataTableComponent;