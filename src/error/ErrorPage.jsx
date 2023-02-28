import React from "react";
import './ErrorPage.css';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="errorPage">
            <h1>Ops...</h1>
            <p>Sorry, Page Not Found!</p>
        </div>
    )
}