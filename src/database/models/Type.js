module.exports = (sequelize, datatype)=>{
    const alias = "Type";
    const columns = {
        id:{
            type: datatype.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        rango:{
            type: datatype.STRING(100)
        }
    };
    const config = {
        tableName: "types",
        timestamps: false,

    };
    const Type = sequelize.define(alias, columns, config);
    // Category.associate = (models) => {
    //     Category.hasMany(models.User, {
    //         as: 'category',
    //         foreignKey: 'category_id'
    //     })
    // };
    return Type;
};