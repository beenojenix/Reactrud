import React,{ useState,useEffect } from "react";

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        registerNo:'',
    }

    var [values, setValues] = useState(initialFieldValues)
    useEffect(()=>{
        if(props.currentId=='')
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.contactObjects[props.currentId]
        })

    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
       var {name, value} =  e.target
       setValues({
           ...values,
           [name] : value
       })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    

    return(
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group mb-3">
                <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName} onChange={handleInputChange}
                
                />
            </div>
            <div className="form-group input-group mb-3">
                <input className="form-control" placeholder="Register No" name="registerNo" value={values.registerNo}  onChange={handleInputChange}  />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId==''?"Save": "Update"} className="btn btn-primary btn-block f-right" />
            </div>
        </form>
    );
}

export default ContactForm;