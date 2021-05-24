import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Form from '../components/Form';

const Add = props => {

    const [myForm, setMyForm] = useState({
        title: "",
        dueDate: "",
        status: "Backlog"
    })
    const [errors, setErrors] = useState({})
    const [titleErr, setTitleErr] = useState({})
    const [dateErr, setDateErr] = useState({})

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
        if(e.target.name ==="title"){
            if((e.target.value).length ===0){
                setTitleErr("You must provide a title!")
            }
            else if((e.target.value).length<3){
                setTitleErr("The title must be at least 3 characters long!")
            }
            else{
                setTitleErr("")
            }
        } else if (e.target.name ==="dueDate"){
            if((e.target.value).length ===0){
                setDateErr("A due date is required for the project!")
            }
            else{
                setDateErr("")
            }
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/projects/new`, myForm)
            .then(res => {
                if(res.data.error){
                    setErrors(res.data.error.errors)
                } else{
                    console.log("New project submitted successfully!")
                    navigate("/")
                }
            })
            .catch(err => console.log("Oops! Something went wrong when adding a new project from the front end!", err))
    }

    return(
        <div>
            <h4 className = "text-success float-start">Plan a new Project</h4>
            <Link to = "/" className = "float-end ">Back to Dashboard</Link>
            <br/>
            <Form onSubmitHandler = {onSubmitHandler} onChangeHandler = {onChangeHandler} myForm = {myForm} errors = {errors} titleErr ={titleErr} dateErr = {dateErr}/>
        </div>
    );
}
export default Add;