import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavContainer from './NavContainer'
import Header from './Header'
import Main from './Main'
import ProjectsContainer from './ProjectsContainer'
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
                <div className="content">
                    { this.state.showNav ? <NavContainer toggleNav={ this.toggleNav } /> : null }
                    <Header toggleNav={ this.toggleNav } />
                    <Route exact path="/" component={ Main } />
                    <Route path="/projects" component={ ProjectsContainer } />
                    <Route path="/about" component={ About } />
                </div>
            </Router>
        )
    }
}

export default Content