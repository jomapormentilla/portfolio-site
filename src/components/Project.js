import React from 'react'

class Project extends React.Component {
    render(){
        return(
            <div className="project">
                { this.props.data.title } { this.props.data.id }
            </div>
        )
    }
}

export default Project