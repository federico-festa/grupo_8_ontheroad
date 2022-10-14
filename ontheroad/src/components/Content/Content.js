import React from 'react';

import ContentTotals from './ContentTotals/ContentTotals';
import ContentMiddle from './ContentMiddle/ContentMiddle';
import ContentProducts from './ContentProducts/ContentProducts';

function Content() {
    return (
        <React.Fragment>
            <ContentTotals />
            <ContentMiddle />
            <ContentProducts />
        </React.Fragment>
    );
}

export default Content;