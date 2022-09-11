module.exports = (sequelize, datatype)=>{
    const alias = "Admin";
    const columns = {
        id:{
            type: datatype.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        firstName:{
            type: datatype.STRING(50)
        },
        lastName:{
            type: datatype.STRING(50)
        },
        dni:{
            type: datatype.INTEGER
        },
        email:{
            type: datatype.STRING(50)
        },
        id_type:{
            type: datatype.INTEGER
        }
    };
    const config = {
        tableName: "admins",
        timestamps: false,

    };
    const Admin = sequelize.define(alias, columns, config);
    // Category.associate = (models) => {
    //     Category.hasMany(models.User, {
    //         as: 'category',
    //         foreignKey: 'category_id'
    //     })
    // };
    return Admin;
};