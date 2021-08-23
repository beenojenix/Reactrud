import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm"
import firebaseDb from "../firebase";
import "./Contacts.css";

const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot => {
           if(snapshot.val()!=null) 
           setContactObjects({
               ...snapshot.val()
           })
           else
           setContactObjects({})
        })
    }, [])

    const addOrEdit = obj=> {
        if(currentId == '')
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if(err)
                console.log(err);
            }
        )
        else
        firebaseDb.child(`contacts/${currentId}`).set(
            obj,
            err => {
                if(err)
                console.log(err);
                else
                setCurrentId('')
            }
        )
    }

    const onDelete = key => {
        if(window.confirm('Are you sure to delete?')){
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if(err)
                    console.log(err);
                    else
                    setCurrentId('')
                }
            )
        }
    }

    return(
        <>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Contacts</h1>
            </div>
            </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({addOrEdit,currentId,contactObjects})}></ContactForm>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Register Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id=>{
                                    return <tr key={id}>
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].registerNo}</td>
                                        <td>
                                            <a className="btn btn-primary" onClick={()=> {setCurrentId()}}>
                                                Edit
                                            </a>  &nbsp; &nbsp;
                                            <a className="btn btn-danger" onClick={() => onDelete(id)}>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contacts;