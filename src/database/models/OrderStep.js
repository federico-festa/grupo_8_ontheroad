module.exports = (sequelize, datatype)=>{
    const alias = "OrderStep";
    const columns = {
        id:{
            type: datatype.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        totalPrice:{
            type: datatype.DECIMAL
        },
        id_tipoPago:{
            type: datatype.INTEGER
        },
        id_client:{
            type: datatype.INTEGER
        }
    };
    const config = {
        tableName: "orderStep",
        timestamps: false,

    };
    const OrderStep = sequelize.define(alias, columns, config);
    // Category.associate = (models) => {
    //     Category.hasMany(models.User, {
    //         as: 'category',
    //         foreignKey: 'category_id'
    //     })
    // };
    return OrderStep;
};