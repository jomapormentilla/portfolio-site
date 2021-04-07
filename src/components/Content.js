import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavContainer from './NavContainer'
import Header from './Header'
import Main from './Main'
import ProjectsContainer from './ProjectsContainer'
import Resume from './Resume'
import Contact from './Contact'
import Blog from './Blog'
import About from './About'

class Content extends React.Component {
    state = {
        showNav: false
    }

    toggleNav = e => {
        e.persist()
        this.setState(prevState => ({
            showNav: !prevState.showNav
        }))
    }

    render(){
        return(
            <Router>
                <div className="content" onClick={e => { return !!this.state.showNav && !e.target.classList.contains("bi-list") ? this.toggleNav(e) : null }}>
                    { this.state.showNav ? <NavContainer /> : null }
                    <Header toggleNav={ this.toggleNav } />
                    <Route exact path="/" component={ Main } />
                    <Route path="/projects" component={ ProjectsContainer } />
                    <Route path="/resume" component={ Resume } />
                    <Route path="/contact" component={ Contact } />
                    <Route path="/blog" component={ Blog } />
                    <Route path="/about" component={ About } />
                </div>
            </Router>
        )
    }
}

export default Content