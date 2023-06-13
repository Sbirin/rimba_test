var express = require('express');
var router = express.Router();

const Validator = require('fastest-validator');
const { Customer } = require('../models');
const v = new Validator();

router.get('/', async(req, res) => {

  try {
      const customers = await Customer.findAll();

      return res.status(200).json({data : customers, message : 'Data berhasil ditemukan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak ditemukan'});
  }

})

router.get('/:id', async(req, res) => {

  try {

      const customer = await Customer.findByPk(req.params.id);

      return res.status(200).json({data : customer, message : 'Data berhasil ditemukan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak ditemukan'});
  }

})

router.post('/', async(req, res) => {

  try {

      const schema = {
        nama: 'string',
        contact:'string',
        email:'string',
        alamat:'string',
        diskon:'number',
        tipe_diskon:'string',
        ktp: 'string',
      };
    
      const validate = v.validate(req.body, schema);
    
      if (validate.length) {
        return res.status(400).json({data : null, message : validate});
      };
    
      const customer = await Customer.create(req.body);
    
      return res.status(200).json({data : customer, message : 'Data berhasil disimpan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil disimpan'});
  }

});

router.put('/:id', async (req, res) => {
  try {
    
      let customer = await Customer.findByPk(req.params.id);

      if (!customer) {
        return res.status(400).json({data : null, message : 'Customer Tidak Ditemukan'});
      }

      const schema = {
        nama: 'string|optional',
        contact:'string|optional',
        email:'string|optional',
        alamat:'string|optional',
        diskon:'number|optional',
        tipe_diskon:'string|optional',
        ktp: 'string|optional',
      };

      const validate = v.validate(req.body, schema);

      if (validate.length) {
        return res.status(400).json({data : null, message : validate});
      };

      customer = await Customer.update(req.body);

      return res.status(200).json({data : customer, message : 'Data berhasil diupdate'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil diupdate'});
  }

})

router.delete('/:id', async(req, res) => {
  try {
      let customer = await Customer.findByPk(req.params.id);

      if (!customer) {
        return res.status(400).json({data : null, message : 'Customer Tidak Ditemukan'});
      }
      
      await Customer.destroy();
      
      return res.status(200).json({data : null, message : 'Data berhasil dihapus'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil dihapus'});
  }

})

module.exports = router;
