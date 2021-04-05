import React from 'react'

class Project extends React.Component {
    componentDidMount(){
        console.log("Project Component Mounted.")
    }

    render(){
        return(
            <div className="project">
                { this.props.data.title } { this.props.data.id }
            </div>
        )
    }
}

export default Project