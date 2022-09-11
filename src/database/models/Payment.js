module.exports = (sequelize, datatype)=>{
    const alias = "Payment";
    const columns = {
        id:{
            type: datatype.INTEGER , 
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: datatype.STRING(100)
        }
    };
    const config = {
        tableName: "payments",
        timestamps: false,

    };
    const Payment = sequelize.define(alias, columns, config);
    // Payment.associate = (models) => {
    //     Region.hasMany(models.Product, {
    //         as: 'region',
    //         foreignKey: 'regions_id'
    //     })
    // };
    return Payment;
};