module.exports = (sequelize, datatype) => {
    const alias = "Product";
    const columns = {
        id:{
            type: datatype.INTEGER , 
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: datatype.STRING(50)
        },
        price:{
            type: datatype.DECIMAL
        },
        discount:{
            type: datatype.INTEGER
        },
        descriptionShort:{
            type: datatype.STRING(100)
        },
        descriptionLong:{
            type: datatype.STRING(500)
        },
        img:{
            type: datatype.STRING(255)
        },
        id_region:{
            type: datatype.INTEGER
        }
    };
    const config = {
        tableName: "products",
        timestamps: false,
    };
    const Product = sequelize.define(alias, columns, config);
    Product.associate = (models) => {
        Product.belongsTo(models.Region, {
            as: 'product',
            foreignKey: 'id_region'
        })
    };
    return Product;
};