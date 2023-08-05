export const enviroment = {
  production: false,
  endPoints: {
    user: {
      path: 'localhost:8080',
      context: 'users',
      protocol: 'http'
    },

    movie: {
      path: 'localhost:8080',
      context: 'movies',
      protocol: 'http'
    },

    gender: {
      path: 'localhost:8080',
      context: 'categories',
      protocol: 'http'
    },

    casting: {
      path: 'localhost:8080',
      context: 'castings',
      protocol: 'http'
    }
  }
}
