module.exports = (sequelize, datatype)=>{
    const alias = "User";
    const columns = {
        id:{
            type: datatype.INTEGER , 
            primaryKey: true,
            autoIncrement: true,
        },
        firstName:{
            type: datatype.STRING(20)
        },
        lastName:{
            type: datatype.STRING(20)
        },
        email:{
            type: datatype.STRING(100)
        },
        password:{
            type: datatype.STRING(10)
        },
        category_id:{
            type: datatype.INTEGER
        }
    };
    //Opcional
    const config = {
        tableName: "users",
        timestamps: false,

    }
    //
    const User = sequelize.define(alias, columns, config);
    User.associate = (models) => {
        User.belongsTo(models.Category, {
            as: 'user',
            foreignKey: 'category_id'
        })
    }
    return User;
}