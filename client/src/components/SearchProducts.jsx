import React, { useState } from 'react'
import Select from "react-select";
import Axios from 'axios';

export default function SearchProducts({
    onChangePrice,
    onChangeCategory
}
) {


    const [price, setPrice] = useState("");
    const [listCategories, setListCategories] = useState([]);

    const textOnChangePrice = (event) => {
        const newValue = event.target.value;
        setPrice(newValue)
        onChangePrice(newValue)
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
        <div className="container" >
            <div className="row">
                {/* input price */}
                <div className="col-6">
                    <div className="input-group mb-6">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Price</span>
                        </div>
                        <input
                            type="text"
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
                        <div style={{ width: '80%' }}>
                            <Select
                                className="select-custom-className"
                                options={listCategories}
                                onChange={onChangeCategory}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

