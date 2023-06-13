module.exports = (sequelize, DataTypes) => {
    const Sale_detail = sequelize.define('Sale_detail', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      sale_id : {
        type: DataTypes.INTEGER,
        allowNull:false
      }, 
      item_id : {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      qty : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      harga_satuan: {
        type: DataTypes.DECIMAL,
        allowNull: false
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
          tableName : 'sale_details'
      });

    return Sale_detail;
}