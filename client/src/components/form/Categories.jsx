import React, { useState } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button'


export default function Products() {

    const [name, setName] = useState("");
    const textOnChangeName = (event) => {
        setName(event.target.value)
    }
    const saveFormCategory = () => {

        Axios.post("http://localhost:3001/categories/create", {
            name: name,
        }).then(() => {
            console.log("Save successfully");
        })


    }


    return (
        <div className="container">
            <br />

            <div className="card">
                <h5 className="card-header">New Category</h5>
                <div className="card-body">

                    {/* input name */}
                    <div className="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input
                            type="text"
                            value={name}
                            style={{ textTransform: 'uppercase' }}
                            onChange={textOnChangeName}
                            className="form-control"
                            aria-label="Recipient's username" aria-describedby="basic-addon2"
                        />
                    </div>
                    <Button onClick={saveFormCategory} className="btn btn-success">Registrar</Button>

                </div>
            </div>

        </div >
    );

}
