import React from 'react'
import { Link } from 'react-router-dom'

class NavContainer extends React.Component {
    render(){
        return(
            <div className="navContainer" style={{ top: 101 }}>
                <ul>
                    <Link to="/" className="navItem"><li>Main</li></Link>
                    <Link to="/projects" className="navItem"><li>Projects</li></Link>
                    <Link to="/resume" className="navItem"><li>Resume</li></Link>
                    <Link to="/contact" className="navItem"><li>Contact Me</li></Link>
                    <Link to="/blog" className="navItem"><li>Blog</li></Link>
                    <Link to="/about" className="navItem"><li>About</li></Link>
                </ul>
            </div>
        )
    }
}

export default NavContainer