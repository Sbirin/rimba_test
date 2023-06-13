'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      code_transaksi : {
        type: Sequelize.STRING,
        allowNull:false
      }, 
      tanggal_transaksi : {
        type: Sequelize.DATE,
        allowNull: false
      },
      customer : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_diskon: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      total_harga: {
        type: Sequelize.DECIMAL,
        allowNull:false
      }, 
      total_bayar: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable('sales');
  }
};
