import React, { useState } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button'


export default function Products() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    // const [category, setCategory] = useState(1);


    const textOnChangeName = (event) => {
        setName(event.target.value)
    }

    const textOnChangePrice = (event) => {
        setPrice(event.target.value)
    }


    const saveForm = () => {

        Axios.post("http://localhost:3001/products/create", {
            name: name,
            price: price,
            // category: category,
        }).then(() => {
            // getProducts();
            console.log("Save successfully");
        })


    }


    return (
        <div className="container">
            <br />

            <div className="card">
                <h5 className="card-header">Producto</h5>
                <div className="card-body">

                    {/* input name */}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Nombre</span>
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

                    {/* input price */}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Precio</span>
                        </div>
                        <input
                            type="number"
                            value={price}
                            onChange={textOnChangePrice}
                            className="form-control"
                            aria-label="Recipient's username" aria-describedby="basic-addon2"
                        />
                    </div>

                    <Button onClick={saveForm} className="btn btn-success">Registrar</Button>

                </div>
            </div>

        </div >
    );

}
