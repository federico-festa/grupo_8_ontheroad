module.exports = (sequelize, datatype)=>{
    const alias = "Type";
    const columns = {
        id:{
            type: datatype.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        role:{
            type: datatype.STRING(100)
        }
    };
    const config = {
        tableName: "types",
        timestamps: false,

    };
    const Type = sequelize.define(alias, columns, config);
    Type.associate = (models) => {
        Type.hasMany(models.User, {
            as: 'type_usr',
            foreignKey: 'id_type'
        })
    };
    return Type;
};