import React, { useState } from 'react'
import SelectCategory from './SelectCategory';

export default function SearchProducts() {

    const { firstname, lastname } = props;

    const [price, setPrice] = useState("");

    const textOnChangePrice = (event) => {
        setPrice(event.target.value)
    }

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
                        <SelectCategory category="" firstname="Andres" lastname="Garcia" />
                    </div>

                </div>
            </div>
        </div >
    );
}

SearchProducts.defaultProps({
    firstname: "Agustin",
    lastname: "Navarro"
})
