
import React, { Component } from 'react'

class User extends Component {

    //Destructing
    

    render() {
        const {name,department,salary} = this.props;
        return (
            <div>
                <ul>
                    <li>
                          İsim: {this.props.name}
                    </li>
                    <li>
                          Departman: {this.props.department}
                    </li>
                    <li>
                          Maaş: {this.props.salary}
                    </li>
                </ul>
            </div>
        )
    }
}
export default User;
