import React from 'react'

import Project from './Project'

const projects = [
    { id: 1, title: 'Hogwarts Social Media', content: 'sample' },
    { id: 2, title: 'Jomazon Prime', content: 'sample' },
    { id: 3, title: 'Launch', content: 'sample' },
    { id: 4, title: 'Jomatrix', content: 'sample' },
    { id: 5, title: 'Project', content: 'sample' },
    { id: 6, title: 'Project', content: 'sample' },
    { id: 7, title: 'Project', content: 'sample' },
    { id: 8, title: 'Project', content: 'sample' },
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