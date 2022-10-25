import React from "react";

function ContentTotals() {
    return (
        <React.Fragment>
            <div className="contentTotals">
                <div className="cardbody">
                    <span>Total de productos</span>        
                </div>
                <div className="cardbody">
                    <span>Total de regiones</span>        
                </div>
                <div className="cardbody">
                    <span>Total de usuarios</span>        
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContentTotals;