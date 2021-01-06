import React from "react";
import { Link } from "react-router-dom";

const products = [
    { id: "1", label: "Nutella" },
    { id: "2", label: "Pane" },
    { id: "3", label: "Latte" }
];

export const Catalog = () => {
    return (
        <div>
        <h1>Catalog</h1>
        {
        products.map(({id, label}) => 
            <li>
                <Link to={`/product/${id}`}>{label}</Link>
            </li>
            )
        }
        </div>
    )
}

export const Product = ({ match }) => {
    const product = products.find(item => item.id === match.params.id)
    return  <div>
                Product ID: {match.params.id }
                <h3>{product.label}</h3>
                <hr/>
                <Link to="/catalog/">Back</Link>
            </div>
}