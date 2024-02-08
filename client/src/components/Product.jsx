import React from 'react'

import SearchProducts from './SearchProducts';
import TableProducts from './TableProducts';
import Button from 'react-bootstrap/Button'


export default function Product() {


    return (
        <div className="container" >
            <div className="card">


                <h5 class="card-header d-flex justify-content-between align-items-right">
                    Products
                    <div className="col-md-2 float-right">
                        <Button onClick="" className="btn btn-success">Buscar </Button>
                        <Button onClick="" className="btn btn-primary">Limpiar </Button>
                    </div>
                </h5>
                <div className="card-body">
                    <br />
                    <SearchProducts category="" price="" />
                    <br />
                    <TableProducts listProducts="" />
                </div>
            </div>
        </div>
    );
}

{/* <div className="container" >
<br />

<div className="card">
    <h5 className="card-header">List Products</h5>
    <div className="card-body"> */}

