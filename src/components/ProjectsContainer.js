import React from 'react'

import Project from './Project'

const projects = [
    { id: 1, title: 'Project', content: 'sample' },
    { id: 2, title: 'Project', content: 'sample' },
    { id: 3, title: 'Project', content: 'sample' },
    { id: 4, title: 'Project', content: 'sample' },
    { id: 5, title: 'Project', content: 'sample' },
    { id: 6, title: 'Project', content: 'sample' },
    { id: 7, title: 'Project', content: 'sample' },
]

class ProjectsContainer extends React.Component {
    state = {
        projects: []
    }

    componentDidMount(){
        this.setState({
            projects: projects
        })
    }

    renderProjects = () => {
        return this.state.projects.map(data => <Project key={ data.id } data={ data } />)
    }

    render(){
        return(
            <div className="projectsContainer">
                { this.renderProjects() }
            </div>
        )
    }
}

export default ProjectsContainer