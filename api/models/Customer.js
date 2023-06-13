module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
          },
          nama : {
            type: DataTypes.STRING,
            allowNull:false
          }, 
          contact : {
            type: DataTypes.STRING,
            allowNull: false
          },
          email : {
            type: DataTypes.STRING,
            allowNull: false,
          },
          alamat: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          diskon: {
            type: DataTypes.DECIMAL,
            allowNull:false
          }, 
          tipe_diskon: {
            type: DataTypes.STRING,
            allowNull:false
          }, 
          ktp: {
            type: DataTypes.TEXT,
            allowNull:false
          }, 
          createdAt:{
            type: DataTypes.DATE,
            allowNull:false
          }, 
          updatedAt:{
            type: DataTypes.DATE,
            allowNull:false
          }
        }, {
            tableName : 'customers'
        });

    return Customer;
}