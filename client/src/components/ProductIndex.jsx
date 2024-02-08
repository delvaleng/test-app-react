import React, { useState } from 'react'

import SearchProducts from './SearchProducts';
import TableProducts from './TableProducts';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';


export default function ProductIndex() {

    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [listProducts, setListProducts] = useState([]);


    const handleChangePrice = (e) => {
        setPrice(e)
    }

    const handleChangeCategory = (e) => {
        setCategory(e.value)
    }

    const getProducts = async () => {

        const products = await Axios.post("http://localhost:3001/products/list",
            {
                price,
                category
            });
        setListProducts(products.data)
    }

    const handleSearchProducts = () => {
        console.log(price)
        console.log(category)
        getProducts();
    }


    React.useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="container" >
            <div className="card">
                <h5 className="card-header d-flex justify-content-between align-items-right">
                    Products
                    <div className="col-md-2 float-right">
                        <Button onClick={handleSearchProducts} className="btn btn-success">Buscar </Button>
                    </div>
                </h5>
                <div className="card-body">
                    <br />
                    <SearchProducts onChangePrice={handleChangePrice} onChangeCategory={handleChangeCategory} />
                    <br />
                    <TableProducts listProducts={listProducts} />
                </div>
            </div>
        </div>
    );
}

