import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '20px' }}>Joma Pormentilla</div>
                <i className="bi-three-dots" onClick={ this.props.toggleNav }></i>
            </div>
        )
    }
}

export default Header