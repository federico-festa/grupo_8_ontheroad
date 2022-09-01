module.exports = (sequelize, datatype)=>{
    const alias = "Region";
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
    //Opcional
    const config = {
        tableName: "regions",
        timestamps: false,

    }
    //
    const Region = sequelize.define(alias, columns, config);
    Region.associate = (models) => {
        Region.hasMany(models.Product, {
            as: 'region',
            foreignKey: 'regions_id'
        })
    }
    return Region;
}