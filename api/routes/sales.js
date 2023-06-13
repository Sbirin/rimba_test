var express = require('express');
var router = express.Router();

const Validator = require('fastest-validator');
const { Sale, Customer, Item } = require('../models');
const v = new Validator();

router.get('/', async(req, res) => {

  try {
      const sales = await Sale.findAll();

      return res.status(200).json({data : sales, message : 'Data berhasil ditemukan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak ditemukan'});
  }

});

router.get('/create', async(req, res) => {

  try {
      const customers = await Customer.findAll();
      const items = await Item.findAll();

      return res.status(200).json({data : {customers : customers, items:items}, message : 'Data berhasil ditemukan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak ditemukan'});
  }

});


router.get('/:id', async(req, res) => {

  try {

      const sale = await Sale.findByPk(req.params.id);

      return res.status(200).json({data : sale, message : 'Data berhasil ditemukan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak ditemukan'});
  }

})

router.post('/', async(req, res) => {

  try {

      const schema = {
        code_transaksi: 'string',
        tanggal_transaksi:'string',
        customer:'string',
        total_diskon:'string',
        total_harga:'string',
        total_bayar:'string',
      };
    
      const validate = v.validate(req.body, schema);
    
      if (validate.length) {
        return res.status(400).json({data : null, message : validate});
      };
    
      const sale = await Sale.create(req.body);
    
      return res.status(200).json({data : sale, message : 'Data berhasil disimpan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil disimpan'});
  }

});

router.put('/:id', async (req, res) => {
  try {
    
      let sale = await Sale.findByPk(req.params.id);

      if (!sale) {
        return res.status(400).json({data : null, message : 'Customer Tidak Ditemukan'});
      }

      const schema = {
        code_transaksi: 'string|optional',
        tanggal_transaksi:'string|optional',
        customer:'string|optional',
        total_diskon:'string|optional',
        total_harga:'string|optional',
        total_bayar:'string|optional',
      };

      const validate = v.validate(req.body, schema);

      if (validate.length) {
        return res.status(400).json({data : null, message : validate});
      };

      sale = await Sale.update(req.body);

      return res.status(200).json({data : sale, message : 'Data berhasil diupdate'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil diupdate'});
  }

})

router.delete('/:id', async(req, res) => {
  try {
      let sale = await Sale.findByPk(req.params.id);

      if (!sale) {
        return res.status(400).json({data : null, message : 'Customer Tidak Ditemukan'});
      }
      
      await Sale.destroy();
      
      return res.status(200).json({data : null, message : 'Data berhasil dihapus'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil dihapus'});
  }

})

module.exports = router;
