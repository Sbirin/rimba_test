'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('items', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      nama_item : {
        type: Sequelize.STRING,
        allowNull:false
      }, 
      unit : {
        type: Sequelize.ENUM('kg', 'pcs'),
        allowNull: false
      },
      stok : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      harga_satuan: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      barang: {
        type: Sequelize.TEXT,
        allowNull:false
      }, 
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
      }, 
      updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};
