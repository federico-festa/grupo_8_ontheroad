module.exports = (sequelize, datatype) => {
    const alias = "Product";
    const columns = {
        id:{
            type: datatype.INTEGER , 
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: datatype.STRING(100)
        },
        price:{
            type: datatype.DECIMAL
        },
        discount:{
            type: datatype.INTEGER
        },
        descriptionShort:{
            type: datatype.STRING(500)
        },
        descriptionLong:{
            type: datatype.STRING(1000)
        },
        image:{
            type: datatype.STRING(100)
        },
        regions_id:{
            type: datatype.INTEGER
        }
    };
    const config = {
        tableName: "products",
        timestamps: false,
    }
    const Product = sequelize.define(alias, columns, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Region, {
            as: 'product',
            foreignKey: 'regions_id'
        })
    }

    return Product;
}