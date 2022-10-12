module.exports = (sequelize, datatype)=>{
    const alias = "User";
    const columns = {
        id:{
            type: datatype.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        firstName:{
            type: datatype.STRING(20)
        },
        lastName:{
            type: datatype.STRING(20)
        },
        dni:{
            type: datatype.INTEGER
        },
        gender:{
            type: datatype.STRING(50)
        },
        email:{
            type: datatype.STRING(50)
        },
        password:{
            type: datatype.STRING(50)
        },
        address:{
            type: datatype.STRING(50)
        },
        telephone:{
            type: datatype.INTEGER
        },
        postalCode:{
            type: datatype.INTEGER
        },
        country:{
            type: datatype.STRING(100)
        },
        id_type:{
            type: datatype.INTEGER
        },
        img:{
            type: datatype.STRING(255)
        }
    };
    const config = {
        tableName: "users",
        timestamps: false,

    };
    const User = sequelize.define(alias, columns, config);
    User.associate = (models) => {
        User.belongsTo(models.Type, {
            as: 'user_type',
            foreignKey: 'id_type'
        })
    }
    return User;
};