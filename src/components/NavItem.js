import React from 'react'

class NavItem extends React.Component {
    render(){
        return(
            <div className="navItem">
                { this.props.data.title } { this.props.data.id }
            </div>
        )
    }
}

export default NavItem