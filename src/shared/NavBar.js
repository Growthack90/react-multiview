import React from "react";
import { Link } from "react-router-dom";

const Sep = () => <span> | </span>;

export const NavBar = () => {
    return (
        <div>
        <Link to="/">Home</Link> <Sep />
        <Link to="/another">Another</Link> <Sep />
        <Link to="/catalog">Catalog</Link>
        </div>
    )
};