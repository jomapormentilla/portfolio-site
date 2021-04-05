import React from 'react'
import Header from './Header'
import ProjectsContainer from './ProjectsContainer'

class Content extends React.Component {
    render(){
        return(
            <div className="content">
                <Header />
                <ProjectsContainer />
            </div>
        )
    }
}

export default Content