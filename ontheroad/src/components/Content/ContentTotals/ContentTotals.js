import React, { useEffect, useState } from "react";
import '../ContentTotals/ContentTotals.css';

import ProductsTotal from "./ProductsTotal/ProductsTotal.js";
import RegionsTotal from './RegionsTotal/RegionsTotal.js';
import UsersTotal from './UsersTotal/UsersTotal.js';

function ContentTotals() {
    return (
        <React.Fragment>
            <div className="contentcard">
                <ProductsTotal />
                <RegionsTotal />
                <UsersTotal />
            </div>
        </React.Fragment>
    );
}

export default ContentTotals;