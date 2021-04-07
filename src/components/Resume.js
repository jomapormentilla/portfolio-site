import React from 'react'

class Resume extends React.Component {
    render(){
        return(
            <div className="resume" style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
                <iframe src="/pdf/Pormentilla_Joma.pdf" title="Resume" style={{ width: '100%', height: '100%' }}></iframe>
            </div>
        )
    }
}

export default Resume