module.exports = (sequelize, datatype)=>{
    const alias = "Cart";
    const columns = {
        id:{
            type: datatype.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        cantProduct:{
            type: datatype.INTEGER
        },
        id_client:{
            type: datatype.INTEGER
        },
        id_product:{
            type: datatype.INTEGER
        },
    };
    const config = {
        tableName: "cart",
        timestamps: false,

    };
    const Cart = sequelize.define(alias, columns, config);
    // Category.associate = (models) => {
    //     Category.hasMany(models.User, {
    //         as: 'category',
    //         foreignKey: 'category_id'
    //     })
    // };
    return Cart;
};