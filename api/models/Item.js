module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
          },
          nama_item : {
            type: DataTypes.STRING,
            allowNull:false
          }, 
          unit : {
            type: DataTypes.STRING,
            allowNull: false
          },
          stok : {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          harga_satuan: {
            type: DataTypes.DECIMAL,
            allowNull: false
          },
          barang: {
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
            tableName : 'items'
        });

    return Item;
}