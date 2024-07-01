const validateForm = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
  
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if(rate < 0 || rate > 10){
      return res.status(400).json({ error: 'La calificación debe estar entre 0 y 10' });
    }

    if( year < 1900 || year > 2024) {
      return res.status(400).json({ error: 'El año debe estar entre 1900 y 2024' });
    }
    next();
  };
  
  module.exports = validateForm;