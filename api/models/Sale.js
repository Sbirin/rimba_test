module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      code_transaksi : {
        type: DataTypes.STRING,
        allowNull:false
      }, 
      tanggal_transaksi : {
        type: DataTypes.DATE,
        allowNull: false
      },
      customer : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_diskon: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      total_harga: {
        type: DataTypes.DECIMAL,
        allowNull:false
      }, 
      total_bayar: {
        type: DataTypes.DECIMAL,
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
          tableName : 'sales'
      });

    return Sale;
}