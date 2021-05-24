import React from 'react';

const Block = props => {

    const blockStyle = {
        height : "500px",
        width: "30%",
        display: "inline-block",
        overflow: "scroll",
        padding: "5px"
    }
    const headStyle = () => {
        if(props.stat === "Backlog"){
            return {
                backgroundColor: "#61a4fb"
            }
        } else if (props.stat === "In Progress"){
            return {
                backgroundColor: "rgb(243, 226, 127)"
            }
        }
        else{
            return {
                backgroundColor: "rgb(125, 211, 125)"
            }
        }
    }

    return(
        <div className = "cont col-4 border border-dark" style = {blockStyle}>
            <h4 className = "" style = {headStyle()}>{props.stat}</h4>
            {
                props.projects.map((project, i)=>{
                    return <div key = {i}>
                            {
                                project.status === props.stat? <div className = "border border-dark mb-1">
                                    <h5 className="pt-2">{project.title}</h5>
                                    <p>Due: <span className = "text-danger">{project.dueDate.substr(0,10)}</span></p>
                                    {
                                        project.status === "Backlog" ? <button className = "btn btn-warning ps-5 pe-5 mb-2" onClick = {(e) =>props.onClStatus(project.status, project._id)}> Start Project     &rarr; </button> : project.status === "In Progress" ? <button className = "btn btn-success ps-4 pe-4 mb-2" onClick = {(e) =>props.onClStatus(project.status, project._id)}> Move to Completed     &rarr; </button> : <button className = "btn btn-danger ps-3 pe-3 mb-2" onClick = {(e) =>props.onClStatus(project.status, project._id)}>  Remove Project    &rarr; </button>
                                    }
                                    
                                    
                                </div> : ""
                            }
                        </div>
                })
            }

        </div>
    );


}

export default Block