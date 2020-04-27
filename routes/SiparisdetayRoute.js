const express = require('express');
const router = express.Router();
const {
  addNewSiparisdetay,
  updateSiparisdetay,
  deleteSiparisdetay,
  getSiparisdetayById,
  getSiparisdetay,
} = require('../controller/SiparisdetayController');

router.post('/Siparisdetay', (req, res, next) => {
  addNewSiparisdetay(req.body)
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

router.put('/Siparisdetay', (req, res, next) => {
  updateSiparisdetay(req.body)
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

router.delete('/Siparisdetay/:ID/:MODIFIED_BY', (req, res, next) => {
  deleteSiparisdetay(req.params)
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

router.get('/Siparisdetay/:ID', (req, res, next) => {
  getSiparisdetayById(req.params)
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

router.get('/Siparisdetay', (req, res, next) => {
  getSiparisdetay()
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
