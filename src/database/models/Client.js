module.exports = (sequelize, datatype)=>{
    const alias = "Client";
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
        genero:{
            type: datatype.STRING(50)
        },
        email:{
            type: datatype.STRING(50)
        },
        password:{
            type: datatype.STRING(50)
        },
        domicilio:{
            type: datatype.STRING(50)
        },
        telefono:{
            type: datatype.INTEGER
        },
        codigoPostal:{
            type: datatype.INTEGER
        },
        pais:{
            type: datatype.STRING(100)
        },
        id_type:{
            type: datatype.INTEGER
        }
    };
    const config = {
        tableName: "clients",
        timestamps: false,

    };
    const Client = sequelize.define(alias, columns, config);
    Client.associate = (models) => {
        Client.belongsTo(models.Type, {
            as: 'type',
            foreignKey: 'id_type'
        })
    }
    return Client;
};