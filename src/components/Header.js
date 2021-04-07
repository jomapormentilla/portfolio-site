import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <Link to="/" style={{ fontFamily: 'Bebas Neue', fontSize: '20px', textDecoration: 'none', color: '#000' }}>Joma Pormentilla</Link>
                <i className="bi-list" onClick={ this.props.toggleNav }></i>
            </div>
        )
    }
}

export default Header