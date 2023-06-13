'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('customers', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      nama : {
        type: Sequelize.STRING,
        allowNull:false
      }, 
      contact : {
        type: Sequelize.STRING,
        allowNull: false
      },
      email : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      diskon: {
        type: Sequelize.DECIMAL,
        allowNull:false
      }, 
      tipe_diskon: {
        type: Sequelize.ENUM('%', 'Rp'),
        allowNull:false
      }, 
      ktp: {
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
    await queryInterface.dropTable('customers');
  }
};
