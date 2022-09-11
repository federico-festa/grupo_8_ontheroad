module.exports = (sequelize, datatype)=>{
    const alias = "OrderDetail";
    const columns = {
        id:{
            type: datatype.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        price:{
            type: datatype.DECIMAL
        },
        cantidad:{
            type: datatype.INTEGER
        },
        id_order:{
            type: datatype.INTEGER
        },
        id_product:{
            type: datatype.INTEGER
        }
    };
    const config = {
        tableName: "orderDetail",
        timestamps: false,

    };
    const OrderDetail = sequelize.define(alias, columns, config);
    // Category.associate = (models) => {
    //     Category.hasMany(models.User, {
    //         as: 'category',
    //         foreignKey: 'category_id'
    //     })
    // };
    return OrderDetail;
};