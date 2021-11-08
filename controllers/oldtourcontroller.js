/* // const fs = require('fs');
const Tour = require('./../Models/toursModel');

/* /// IMPORTANDO JASON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
); //// cria um array com o conteudo dentro do .json 

/// middleware para checar se a ID é valida
/* exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
}; 

/// Middleware Checkbody
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    /// Se não tiver nome nem preço
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    /* results: tours.length,
    data: {
      tours: tours, // pode usar apenas tours // conteudo do array
    }, 
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  /* const tour = tours.find((el) => el.id === id); //// cria uma nova array com o resultado find

  res.status(200).json({
    status: 'sucess',
    data: {
      tour, // pode usar apenas tours
    },
  }); 
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    /* data: {
      tour: newTour,
    }, */
//});

/*  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  // eslint-disable-next-line prefer-object-spread
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  ); 
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    data: {
      tour: '<Updated Tour Here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'sucess',
    data: null,
  });
}; 
*/
