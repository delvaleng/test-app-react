import React from 'react'

export default function TableProducts({ listProducts }) {

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
