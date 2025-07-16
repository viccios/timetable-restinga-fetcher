function asyncWrapper(callback) {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Erro ao buscar dados', details: error.message });
    }
  };
}

export default asyncWrapper;
