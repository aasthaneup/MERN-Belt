import React from 'react';

const Form = props => {
    
    return(
        <div className = "container">
            <form onSubmit = {props.onSubmitHandler}>
                <div className="form-group mt-3">
                    <label htmlFor="title" className ="float-start ">Project:</label>
                    <input type="text" name="title" id="title" className ="form-control col-sm-6" onChange = {props.onChangeHandler}/>
                    {
                        props.titleErr.length>0 ? <small className = "text-danger">{props.titleErr}</small> : props.errors.title ? <small className = "text-danger">{props.errors.title.message}</small> : ""
                    }
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="dueDate" className ="float-start ">Due Date:</label>
                    <input type="date" name="dueDate" id="dueDate" className ="form-control col-sm-6" onChange = {props.onChangeHandler}/>
                    {
                        props.dateErr.length >0 ? <small className = "text-danger">{props.dateErr}</small> : props.errors.dueDate ? <small className = "text-danger">{props.errors.dueDate.message}</small> : ""
                    }
                </div>
                <div className="form-group">
                    <input className = "btn btn-primary ps-5 pe-5 mt-3" type="submit" value="Plan Project"/>
                </div>
            </form>
        </div>
    );
}
export default Form;