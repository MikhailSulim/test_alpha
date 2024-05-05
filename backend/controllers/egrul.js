const { CastError, ValidationError } = require('mongoose').Error;

const Egrul = require('../models/egrul');
const getData = require('./../utils/egrulApi');

exports.getCompany = (req, res, next) => {
  const company = req.body.query;
  // console.log(company);
  Egrul.find({ n: { $regex: company, $options: 'i' } })
    .then((companies) => {
      console.log('first', companies, company);
      if (companies.length) {
        res.send(companies);
      } else {
        getData(req.body, res, next).then((res) => {
          if (res.rows.length) {
            res.rows.forEach((item) => {
              Egrul.findOne({ i: item.i }).then((res) => {
                if (!res) Egrul.create(item);
                // .then((company) => {
                // console.log('company=', company);
                // res.status(201).send(company);
                // })
                // .catch((err) => next(err));
                // console.log('find=', res);
              });
            });
          }
          // console.log(res);
        });
      }
    })
    .catch(next);
};

exports.addCompany = (req, res, next) => {
  console.log('req=', req);
  const { rn, n, o, e, t, i, p, g, r, k } = req.body;

  Egrul.create({ rn, n, o, e, t, i, p, g, r, k })
    .then((company) => res.status(201).send(company))
    .catch((err) => next(err));
};
