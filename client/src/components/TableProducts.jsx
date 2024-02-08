import React, { useState } from 'react'
import Axios from 'axios';

export default function TableProducts() {

    const [listProducts, setListProducts] = useState([]);

    React.useEffect(() => {
        async function getProducts() {
            await Axios.post("http://localhost:3001/products/list").then(
                (response) => {
                    setListProducts(response.data);
                    console.log("List products ", setListProducts);
                })
        }
        getProducts();
    }, []);

    return (
        <div>
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
    );
}
