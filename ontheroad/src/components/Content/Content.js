import React from 'react';

import ContentTotals from './ContentTotals/ContentTotals';
import ContentProducts from './ContentProducts/ContentProducts';
import LastProduct from './ContentProducts/LastProduct/LastProduct';

function Content() {
    return (
        <React.Fragment>
            <ContentTotals />
            <ContentProducts />
            <LastProduct />
        </React.Fragment>
    );
}

export default Content;