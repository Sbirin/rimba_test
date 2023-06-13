'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sale_details', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      sale_id : {
        type: Sequelize.INTEGER,
        allowNull:false
      }, 
      item_id : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qty : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      harga_satuan: {
        type: Sequelize.DECIMAL,
        allowNull: false
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
    await queryInterface.dropTable('sale_details');
  }
};
