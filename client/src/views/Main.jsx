import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "@reach/router";
import Block from '../components/Block';


const Main = props => {
    const [projectList, setProjectList] = useState([])
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects`)
            .then(res => setProjectList(res.data.project))
            .catch(err => console.log("Something went wrong while trying to extract all the projects to the front end!", err))
    }, [reload])

    const onClickStatus = (st, idx) => {
        if(st === "Backlog"){
            // move to in progress and reload page
            updateTheOneProject(idx, "In Progress")
        } else if(st === "In Progress"){
            // move to completed and reload page
            updateTheOneProject(idx, "Completed")
        } else{
            // delete project and reload page
            deleteProject(idx);
        }
    }
    
    const updateTheOneProject = (idx, updatedStatus) =>{
        axios.put(`http://localhost:8000/api/projects/update/${idx}`, {status: updatedStatus})
            .then(res => {
                console.log("Status successfully updated!");
                setReload(!reload)
            })
            .catch(err => console.log("Oops! Something went wrong while trying to extract one author!", err))
    }

    const deleteProject  = idx => {
        axios.delete(`http://localhost:8000/api/projects/delete/${idx}`)
            .then(res => {
                console.log("Project was successfully deleted!");
                setReload(!reload);
            })
            .catch(err => console.log("Something went wrong when trying to delete from the front end!", err))
    }

    return(
        <div className="container">
        <div className="logbook col">
            <Block stat = {"Backlog"} projects = {projectList} onClStatus = {onClickStatus}/>
            <Block stat = {"In Progress"} projects = {projectList} onClStatus = {onClickStatus} />
            <Block stat = {"Completed"} projects = {projectList} onClStatus = {onClickStatus}/>
        </div>
        <button className = "btn btn-primary float-start ms-5 mb-3"><Link to = "/projects/new" className = "text-white text-decoration-none">Add a new Project!</Link></button>
    </div>
    );
    
}

export default Main
