module.exports = (sequelize, datatype)=>{
    const alias = "Category";
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
        tableName: "category",
        timestamps: false,

    }
    //
    const Category = sequelize.define(alias, columns, config);
    Category.associate = (models) => {
        Category.hasMany(models.User, {
            as: 'category',
            foreignKey: 'category_id'
        })
    }
    return Category;
}