import React from 'react'
import { Link } from 'react-router-dom'

class NavContainer extends React.Component {
    render(){
        return(
            <div className="navContainer" style={{ top: 101 }}>
                <ul>
                    <Link to="/" className="navItem" onClick={ this.props.toggleNav }><li>Main</li></Link>
                    <Link to="/projects" className="navItem" onClick={ this.props.toggleNav }><li>Projects</li></Link>
                    <Link to="/about" className="navItem" onClick={ this.props.toggleNav }><li>About</li></Link>
                </ul>
            </div>
        )
    }
}

export default NavContainer