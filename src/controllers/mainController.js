const path = require('path');
const mainController = {
    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCart.html'));    
    },
};

module.exports = mainController;