import React, { useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button'
import Select from "react-select"


export default function Products() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [listCategories, setListCategories] = useState([]);


    const textOnChangeName = (event) => {
        setName(event.target.value)
    }

    const textOnChangePrice = (event) => {
        setPrice(event.target.value)
    }
    const handleChangeCategory = (e) => {
        setCategory(e.value)
    }



    const saveFormProduct = () => {

        Axios.post("http://localhost:3001/products/create", {
            name: name,
            price: price,
            category: category,
        }).then(() => {
            setName("")
            setPrice("")
            setCategory(null)
            console.log("Save successfully");

        })
    }

    React.useEffect(() => {
        async function getCategories() {
            await Axios.get("http://localhost:3001/categories/list").then(
                (response) => {
                    setListCategories(response.data);
                    // console.log("List categories ", listCategories);
                })
        }
        getCategories();
    }, []);


    return (
        <div className="container">
            <br />

            <div className="card">
                <h5 className="card-header">New Product</h5>
                <div className="card-body">

                    {/* input name */}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Name</span>
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
                            <span className="input-group-text" id="basic-addon1">Price</span>
                        </div>
                        <input
                            type="number"
                            value={price}
                            onChange={textOnChangePrice}
                            className="form-control"
                            aria-label="Recipient's username" aria-describedby="basic-addon2"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Category</span>
                        </div>
                        <div style={{ width: '80%' }}>
                            <Select
                                className="select-custom-className"
                                options={listCategories}
                                onChange={handleChangeCategory}

                            />
                        </div>
                    </div>



                    <Button onClick={saveFormProduct} className="btn btn-success">Registrar</Button>

                </div>
            </div>

        </div >
    );

}
