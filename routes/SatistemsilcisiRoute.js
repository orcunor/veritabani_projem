const express = require('express');
const router = express.Router();
const {
  addNewSatistemsilcisi,
  updateSatistemsilcisi,
  deleteSatistemsilcisi,
  getSatistemsilcisiById,
  getSatistemsilcisi,
} = require('../controller/SatistemsilcisiController');

router.post('/Satistemsilcisi', (req, res, next) => {
  addNewSatistemsilcisi(req.body)
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

router.put('/Satistemsilcisi', (req, res, next) => {
  updateSatistemsilcisi(req.body)
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

router.delete('/Satistemsilcisi/:ID/:MODIFIED_BY', (req, res, next) => {
  deleteSatistemsilcisi(req.params)
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

router.get('/Satistemsilcisi/:ID', (req, res, next) => {
  getSatistemsilcisiById(req.params)
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

router.get('/Satistemsilcisi', (req, res, next) => {
  getSatistemsilcisi()
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
