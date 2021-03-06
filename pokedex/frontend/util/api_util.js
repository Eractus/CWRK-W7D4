const APIUtil = {
  fetchAllPokemon: () => {
    return $.ajax ({
      method: 'GET',
      url: '/api/pokemon',
    });
  },

  fetchPokemon: (id) => {
    return $.ajax ({
      method: 'GET',
      url: `/api/pokemon/${id}`
    });
  }
};

export default APIUtil;
