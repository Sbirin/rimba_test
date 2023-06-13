var express = require('express');
var router = express.Router();

const Validator = require('fastest-validator');
const { Item } = require('../models');
const v = new Validator();

router.get('/', async(req, res) => {

  try {
      const items = await Item.findAll();

      return res.status(200).json({data : items, message : 'Data berhasil ditemukan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak ditemukan'});
  }

})

router.get('/:id', async(req, res) => {

  try {

      const item = await Item.findByPk(req.params.id);

      return res.status(200).json({data : item, message : 'Data berhasil ditemukan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak ditemukan'});
  }

})

router.post('/', async(req, res) => {

  try {

      const schema = {
        nama_item: 'string',
        unit:'string',
        stok:'number',
        harga_satuan:'number',
        barang: 'string',
      };
    
      const validate = v.validate(req.body, schema);
    
      if (validate.length) {
        return res.status(400).json({data : null, message : validate});
      };
    
      const item = await Item.create(req.body);
    
      return res.status(200).json({data : item, message : 'Data berhasil disimpan'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil disimpan'});
  }

});

router.put('/:id', async (req, res) => {
  try {
    
      let item = await Item.findByPk(req.params.id);

      if (!item) {
        return res.status(400).json({data : null, message : 'Item Tidak Ditemukan'});
      }

      const schema = {
        nama_item: 'string|optional',
        unit:'string|optional',
        stok:'number|optional',
        harga_satuan:'number|optional',
        barang: 'string|optional',
      };

      const validate = v.validate(req.body, schema);

      if (validate.length) {
        return res.status(400).json({data : null, message : validate});
      };

      item = await item.update(req.body);

      return res.status(200).json({data : item, message : 'Data berhasil diupdate'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil diupdate'});
  }

})

router.delete('/:id', async(req, res) => {
  try {
      let item = await Item.findByPk(req.params.id);

      if (!item) {
        return res.status(400).json({data : null, message : 'Item Tidak Ditemukan'});
      }
      
      await item.destroy();
      
      return res.status(200).json({data : null, message : 'Data berhasil dihapus'});

  } catch (error) {
      return res.status(400).json({data : null, message : 'Data tidak berhasil dihapus'});
  }

})

module.exports = router;
