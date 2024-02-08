import React, { useState } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button'
import Select from "react-select";
import SelectCategory from '../components/SelectCategory';

export default function ListProducts() {

    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [listProducts, setListProducts] = useState([]);

    const textOnChangePrice = (event) => {
        setPrice(event.target.value)
    }
    const textOnChangeCategory = (event) => {
        setCategory(event.target.value)
    }


    const getProducts = () => {

        Axios.post("http://localhost:3001/products/list", {
            price: price,
            category: category
        }).then(
            (response) => {
                console.log(response.data);
                setListProducts(response.data);
            })
    }

    const cleanSearch = () => {
        setPrice("");
        setCategory("");
        getProducts();
    }



    return (
        <div className="container" >
            <br />

            <div className="card">
                <h5 className="card-header">List Products</h5>
                <div className="card-body">

                    {/* search */}
                    <div className="row">
                        {/* input price */}
                        <div className="col-6">
                            <div className="input-group mb-6">
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

                        </div>
                        {/* input category */}
                        <div className="col-6">
                            <div className="input-group mb-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Category</span>
                                </div>
                                <SelectCategory />
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <Button onClick={getProducts} className="btn btn-lg btn-block btn-success">Buscar</Button>
                        </div>
                        <div className="col-3">
                            <Button onClick={cleanSearch} className="btn btn-lg btn-block btn-success">Limpiar</Button>
                        </div>
                    </div>


                    {/* table */}
                    <table className="table table-stripe">
                        <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                listProducts.map((val, key) => {
                                    return <tr key={val.id}>
                                        <th scope="row">{val.id}</th>
                                        <td>{val.description}</td>
                                        <td>{val.category_id}</td>
                                        <td>{val.price}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}
