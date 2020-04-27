const express = require('express');
const router = express.Router();
const {
  addNewSiparis,
  updateSiparis,
  deleteSiparis,
  getSiparisById,
  getSiparis,
} = require('../controller/SiparisController');

router.post('/Siparis', (req, res, next) => {
  addNewSiparis(req.body)
    .then(result => {
      return res.status(200).json({
        result,
        isSuccess: true,
        error: '',
        statusCode: 200,
      });
    })
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err.errors,
        statusCode: 400,
      });
    });
});

router.put('/Siparis', (req, res, next) => {
  updateSiparis(req.body)
    .then(result => {
      if (result[0] > 0)
        return res.status(200).json({
          result,
          isSuccess: true,
          error: '',
          statusCode: 200,
        });
      else
        return res.status(200).json({
          result: '',
          isSuccess: true,
          error: '',
          statusCode: 204,
        });
    })
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

router.delete('/Siparis/:ID/:MODIFIED_BY', (req, res, next) => {
  deleteSiparis(req.params)
    .then(result => {
      if (result[0] > 0)
        return res.status(200).json({
          result,
          isSuccess: true,
          error: '',
          statusCode: 200,
        });
      else
        return res.status(200).json({
          result: '',
          isSuccess: true,
          error: '',
          statusCode: 204,
        });
    })
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

router.get('/Siparis/:ID', (req, res, next) => {
  getSiparisById(req.params)
    .then(result => {
      console.log(result.dataValues);
      if (result !== null)
        return res.status(200).json({
          result: result.dataValues,
          isSuccess: true,
          error: '',
          statusCode: 200,
        });
      else
        return res.status(200).json({
          result: '',
          isSuccess: true,
          error: '',
          statusCode: 204,
        });
    })
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

router.get('/Siparis', (req, res, next) => {
  getSiparis()
    .then(result => {
      if (result !== null)
        return res.status(200).json({
          result: result,
          isSuccess: true,
          error: '',
          statusCode: 200,
        });
      else
        return res.status(200).json({
          result: '',
          isSuccess: true,
          error: '',
          statusCode: 204,
        });
    })
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

module.exports = router;
