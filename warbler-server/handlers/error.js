const errorHandler = (error, req, res, next) => {
  return res.status(error.status || 500).json({
    error: {
      message: error.message || 'Opp! Something went wrong..'
    }
  });
};

module.exports = errorHandler;
