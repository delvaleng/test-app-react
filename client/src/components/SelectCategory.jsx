import React, { useState } from 'react'
import Select from "react-select";
import Axios from 'axios';


export default function SelectTest() {

    const [listCategories, setListCategories] = useState([]);


    React.useEffect(() => {
        async function getCategories() {
            await Axios.get("http://localhost:3001/categories/list").then(
                (response) => {
                    setListCategories(response.data);
                    console.log("List categories ", listCategories);
                })
        }
        getCategories();
    }, []);

    return (
        <div style={{ width: '80%' }}>
            <Select
                className="select-custom-class"
                options={listCategories}
            />
        </div>
    );

}