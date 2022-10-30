import React from 'react';

import ContentTotals from './ContentTotals/ContentTotals';
import ContentProducts from './ContentProducts/ContentProducts';

function Content() {
    return (
        <React.Fragment>
            <ContentTotals />
            <ContentProducts />
        </React.Fragment>
    );
}

export default Content;